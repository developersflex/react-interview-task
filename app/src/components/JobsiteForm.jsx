import React, { useState } from 'react';
import { Input } from './Input/Input';
import { CustomDropdown } from './Select/CostumDropdown';
import { Button } from './KitButton/Button';
import { Check, X } from '@phosphor-icons/react';
import useCreateJobSite from '../hooks/useCreateJobSites';
import { v4 as uuidv4 } from 'uuid';
import { updateJobSite } from '../api/ApiService';
import './JobsiteForm.scss';
export const JobsiteForm = ({
  jobSitesState,
  handleClose,
  item,
  handleSetJobsites,
}) => {
  const { createJob } = useCreateJobSite();

  const [jobsiteName, setJobsiteName] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if (!item && (!status || !category || !jobsiteName)) return;
    const newJobSite = {
      id: item.id || uuidv4(),
      name: item ? item.name : jobsiteName,
      status,
      categories: item
        ? item.categories
        : category.map(cat => ({
            id: uuidv4(),
            name: cat.value,
            items: [],
          })),
    };

    if (item) {
      updateJobSite(item.id, newJobSite).then(() => {
        const updatedJobSites = jobSitesState.map(site =>
          site.id === item.id ? newJobSite : site
        );
        handleSetJobsites(updatedJobSites);
        handleClose();
      });
    } else {
      createJob(newJobSite).then(() => {
        const updatedJobSites = [newJobSite, ...jobSitesState];
        handleSetJobsites(updatedJobSites);
      });

      handleClose();
    }
  };
  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <div className='create-form__box'>
        <div className='create-form__box__field'>
          <label className='create-form__box--labels'>Name</label>
          <Input
            value={item ? item.name : jobsiteName}
            onChange={e => setJobsiteName(e.target.value)}
            placeholder={`Type the jobsite's name`}
          />
        </div>
        <div className='create-form__box__dropdowns'>
          <div className='create-form__box__dropdowns__category'>
            <label className='create-form__box--labels'>
              Category Included
            </label>
            <CustomDropdown
              optionsType='category'
              isMulti={true}
              onChange={e => setCategory(e)}
              isDisabled={item}
            />
          </div>
          <div className='create-form__box__dropdowns__status'>
            <label className='create-form__box--labels'>Status</label>
            <CustomDropdown
              onChange={e => setStatus(e.value)}
              isMulti={false}
            />
          </div>
        </div>
      </div>
      <footer className='create-form__footer'>
        <Button variant='cancel' onClick={handleClose}>
          Cancel Changes <X size={16} fill='#fff' weight='bold' />
        </Button>
        <Button type='submit'>
          Save Changes <Check weight='bold' fill='#fff' size={16} />
        </Button>
      </footer>
    </form>
  );
};
