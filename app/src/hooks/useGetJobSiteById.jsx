import { useState, useEffect } from 'react';
import { getJobSiteById } from '../api/ApiService';

const useGetJobSiteById = id => {
  const [jobSite, setJobSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobSite = async () => {
      try {
        const data = await getJobSiteById(id);
        setJobSite(data);
      } catch (err) {
        setError('Failed to fetch job site.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobSite();
    }
  }, [id]);

  return { jobSite, loading, error };
};

export default useGetJobSiteById;
