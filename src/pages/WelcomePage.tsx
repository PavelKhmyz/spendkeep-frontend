// import { Link } from 'react-router-dom';
import { getUser } from 'src/entities/user';
import './WelcomePage.style.scss';
import { useAppDispatch, useAppSelector } from 'src/shared/lib';
import { setIsAuthenticated } from 'src/features/auth-by-email';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state);

  const handleStart = async () => {
    if(user.id) {
      dispatch(setIsAuthenticated());
      navigate('/home');
    } else {
      navigate('/auth');
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className='welcomePageWrapper'>
      <h1 className='welcomeTitle'>Welcome to SpendKeep</h1>
      <div className='startLink'>
        <button type='button' onClick={handleStart}>Get started!</button>
        <Link to={ '/auth' }>Get started!</Link>
      </div>
    </div>
  );
};
