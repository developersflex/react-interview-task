import React, { useEffect, useState } from 'react';
import { StatusCard } from '../components/StatusCard';
import { Button } from '../components/KitButton/Button';
import { Modal } from '../components/Modal/Modal';
import { PencilLine, Plus, Trash } from '@phosphor-icons/react';
import './CreateJob.scss';
import { SearchInput } from './../components/SearchInput/SearchInput';
import useJobSites from '../hooks/useJobSites';
import { useNavigate } from 'react-router-dom';
import { deleteJobSiteById } from '../api/ApiService';
import { NoServiceFound } from '../components/NoServiceFound/NoServiceFound';
import { JobsiteForm } from '../components/JobsiteForm';

export const CreateJob = () => {
  const { jobSites, loading, error } = useJobSites();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [isCreating, setIsCreating] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const [jobSitesState, setJobSitesState] = useState([...jobSites].reverse());
  useEffect(() => setJobSitesState([...jobSites].reverse()), [jobSites]);

  const completedCount = jobSitesState.filter(
    site => site.status === 'Completed'
  ).length;
  const onHoldCount = jobSitesState.filter(
    site => site.status === 'On Hold'
  ).length;
  const inProgressCount = jobSitesState.filter(
    site => site.status === 'In Progress'
  ).length;

  function handleClose() {
    setShowModal(false);
  }

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };
  const handleDeleteJobsite = id => {
    deleteJobSiteById(id);
    setJobSitesState(prevState => prevState.filter(item => item.id !== id));
  };
  const filteredData = jobSitesState?.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <main className='main-container'>
      <nav className='main-container__navbar'>
        <StatusCard variant='on-road'>{inProgressCount} On Progress</StatusCard>
        <StatusCard>{completedCount} Completed</StatusCard>
        <StatusCard className='on-hold'>{onHoldCount} On Hold</StatusCard>
      </nav>

      <div className='main-container__search-container'>
        <h2 className='main-container__search-container--title'>
          Create or Edit Jobsite
        </h2>
        <SearchInput value={search} onChange={handleSearchChange} />
        <Button onClick={handleCreate}>
          Create <Plus size={16} fill='#fff' weight='bold' />
        </Button>
      </div>
      <div className='main-container__table-container'>
        <table>
          <thead className='main-container__table-container__header'>
            <tr>
              <th>Jobsite Name</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='main-container__table-container__body'>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td
                  onClick={() => navigate(`/${row.id}`)}
                  className='main-container__table-container__body--name'
                >
                  {row.name}
                </td>
                <td>
                  <span
                    className={`main-container__table-container__body--status-label ${row.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className='actions-cell'>
                  <PencilLine
                    size={20}
                    className='actions-cell__edit-icon'
                    onClick={() => handleEdit(row)}
                  />
                  <Trash
                    size={20}
                    className='actions-cell__delete-icon'
                    onClick={() => handleDeleteJobsite(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredData.length === 0 && <NoServiceFound title='No Jobsite Found' />}
      {showModal && (
        <Modal
          handleClose={handleClose}
          body={() => (
            <JobsiteForm
              handleClose={handleClose}
              handleSetJobsites={setJobSitesState}
              jobSitesState={jobSitesState}
              item={isCreating ? '' : editItem}
            />
          )}
          title={isCreating ? 'Create Jobsite' : 'Editing   Jobsite'}
        />
      )}
    </main>
  );
};
