import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import './InventoryDashboard.scss';
import useGetJobSiteById from '../hooks/useGetJobSiteById';
import { Button } from '../components/KitButton/Button';
import { BackSpaceIcon } from '../styles/BackSpaceIcon';
export const InventoryDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobSite } = useGetJobSiteById(id);
  return (
    <main className='inventory-dashboard'>
      <aside className='inventory-dashboard__left'>
        <div className='inventory-dashboard__left__box'>
          <h2 className='inventory-dashboard__left__box--title'>
            {jobSite?.name}
          </h2>
          <div className='inventory-dashboard__left__box__list'>
            {jobSite?.categories?.map(cat => (
              <NavLink
                key={cat.name}
                className='inventory-dashboard__left__box__list--link'
                to={`/${id}/${cat.name}`}
              >
                {cat.name}
              </NavLink>
            ))}
          </div>
        </div>
        <Button
          className='inventory-dashboard__left--btn-back'
          variant='secondary'
          onClick={() => navigate('/')}
        >
          Back <BackSpaceIcon />
        </Button>
      </aside>
      <div className='inventory-dashboard--right'>
        <Outlet />
      </div>
    </main>
  );
};
