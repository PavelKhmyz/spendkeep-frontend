import { AuthorizationAside } from 'src/widgets/authorization-aside';
import './AuthorizationPage.style.scss';
import { useAppSelector } from 'src/shared/lib';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthorizationPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.auth);

  useEffect(()=>{
    if(isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className='authorizationWrapper'>
      <div className='assetContainer' />
      <AuthorizationAside />
    </div>
  );
};
