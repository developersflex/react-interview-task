import React, { useEffect, useState } from 'react';
import './CategoryList.scss';
import useGetJobSiteById from '../hooks/useGetJobSiteById';
import { useParams } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { Button } from '../components/KitButton/Button';
import { Modal } from '../components/Modal/Modal';
import ItemForm from '../components/ItemForm/ItemForm';
import { PencilLine, PlusCircle, Trash } from '@phosphor-icons/react';
import { NoServiceFound } from '../components/NoServiceFound/NoServiceFound';
import { deleteItem } from '../api/ApiService';

export const CategoryList = () => {
  const { id, category } = useParams();
  const { jobSite } = useGetJobSiteById(id);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [jobsiteState, setJobsiteState] = useState(jobSite);
  const [isCreating, setIsCreating] = useState(true);
  const [editItem, setEditItem] = useState(null);
  useEffect(() => {
    setJobsiteState(jobSite);
  }, [jobSite]);
  const selectedCategory = jobsiteState?.categories.filter(
    cat => cat.name === category
  );

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const filteredData = selectedCategory?.[0]
    ? selectedCategory[0].items.filter(
        data =>
          data.item.toLowerCase().includes(search.toLowerCase()) ||
          data.description.toLowerCase().includes(search.toLowerCase()) ||
          data.notes.toLowerCase().includes(search.toLowerCase())
      )
    : null;
  const handleSetItem = item => {
    setJobsiteState(prev => {
      const updatedCategories = prev.categories.map(cat => {
        if (cat.name === category) {
          return {
            ...cat,
            items: [item, ...cat.items],
          };
        }
        return cat;
      });
      return { ...prev, categories: updatedCategories };
    });
  };

  const handleDelete = async itemId => {
    try {
      console.log(jobSite.id, selectedCategory[0].id, itemId);
      deleteItem(jobSite.id, selectedCategory[0].id, itemId);
      const updatedItems = selectedCategory[0].items.filter(
        item => item.id !== itemId
      );

      setJobsiteState(prev => {
        const updatedCategories = prev.categories.map(cat => {
          if (cat.id === selectedCategory[0].id) {
            return {
              ...cat,
              items: updatedItems,
            };
          }
          return cat;
        });
        return { ...prev, categories: updatedCategories };
      });
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const handleCreate = () => {
    setIsCreating(true);
    setShowModal(true);
  };

  const handleEdit = item => {
    setIsCreating(false);
    setEditItem(item);
    setShowModal(true);
  };
  return (
    <>
      <div className='table-container'>
        <div className='table-container__header'>
          <h2 className='table-container__header-title'>{category}</h2>
          <div className='table-container__header-controls'>
            <SearchInput value={search} onChange={handleSearchChange} />
            <Button onClick={handleCreate}>
              Create <PlusCircle size={16} weight='bold' fill='#fff' />
            </Button>
          </div>
        </div>
        <table className='table-container--table'>
          <thead className='table-container--table__header'>
            <tr>
              <th>Nr.</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='table-container--table__body'>
            {filteredData?.map((row, index) => (
              <tr
                className='table-container--table__body-row'
                key={index}
                style={{ backgroundColor: index % 2 !== 0 ? '' : '#F8F8FA' }}
              >
                <td>{index + 1}</td>
                <td>{row.item}</td>
                <td>{row.quantity}</td>
                <td>{row.description}</td>
                <td>{row.notes}</td>
                <td className='table-container--table__body-row-actions-cell'>
                  <PencilLine
                    size={20}
                    className='table-container--table__body-row-actions-cell__edit-icon'
                    onClick={() => handleEdit(row)}
                  />
                  <Trash
                    size={20}
                    className='table-container--table__body-row-actions-cell__delete-icon'
                    onClick={() => handleDelete(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData?.length === 0 && (
          <NoServiceFound title={'No item Found'} />
        )}
      </div>
      {showModal && (
        <Modal
          handleClose={handleClose}
          title={isCreating ? 'Create Item' : 'Edit Item'}
          body={() => (
            <ItemForm
              onClose={handleClose}
              jobsite={jobSite}
              editItem={isCreating ? '' : editItem}
              categoryId={selectedCategory?.[0].id}
              handleSetItem={handleSetItem}
            />
          )}
        />
      )}
    </>
  );
};
