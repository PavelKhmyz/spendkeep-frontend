import { getUser } from 'src/entities/user';
import { useAppDispatch, useAppSelector } from 'src/shared/lib';

interface IHomePageProps {
  children: JSX.Element
}

export const HomePage = ({ children }: IHomePageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state);

  const handleSendRequest = () => {
    dispatch(getUser());
  };

  return (
    <>
      { children }
      <button type='button' onClick={handleSendRequest}>send</button>
      {user && <div><p>{ user.id }</p>
        <p>{ user.accountId }</p>
        <p>{ user.firstName }</p>
        <p>{ user.lastName }</p>
        <p>{ user.email }</p></div>}
    </>
  );
};
