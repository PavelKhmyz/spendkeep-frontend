import { Link } from 'react-router-dom';
import './WelcomePage.style.scss';

export const WelcomePage = () => {
  return (
    <div className='welcomePageWrapper'>
      <h1 className='welcomeTitle'>Welcome to SpendKeep</h1>
      <div className='startLink'>
        <Link to={ '/auth' }>Get started!</Link>
      </div>
    </div>
  );
};
