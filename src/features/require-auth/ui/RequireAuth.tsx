import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/shared/lib';

interface IRequereAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequereAuthProps) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  
  if(!isAuthenticated) {
    return <Navigate to='/auth' />;
  }

  return children;  
};
