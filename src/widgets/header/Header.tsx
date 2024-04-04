import { setIsAuthenticated } from 'src/features/auth-by-email';
import { authorizationApi } from 'src/shared/api/authorization';
import { useAppDispatch } from 'src/shared/lib';

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await authorizationApi.logout();

    dispatch(setIsAuthenticated());
  };

  return (
    <div className="headerWrapper" style={{ width: '100%', height: '100px', backgroundColor: 'red' }}>
      <h1>SPENDKEEP</h1>
      <button onClick={ handleLogout } type='button'>LOGOUT</button>
    </div>
  );
};
