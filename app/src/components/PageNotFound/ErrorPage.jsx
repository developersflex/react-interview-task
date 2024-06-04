import { Button } from '../KitButton/Button';
import { BackSpaceIcon } from '../../styles/BackSpaceIcon';
import './ErrorPage.scss';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../constants/routerPaths';
export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className='not-found'>
      <div className='not-found__box'>
        <h1>404</h1>
        <div className='not-found__box--content'>
          <h2>Page not found</h2>
          <p>Oops! The page your looking for doesnt exist </p>{' '}
        </div>
        <Button
          variant='secondary'
          onClick={() => navigate(routerPaths.default)}
        >
          <BackSpaceIcon />
          BACK TO HOME
        </Button>
      </div>
    </section>
  );
};
