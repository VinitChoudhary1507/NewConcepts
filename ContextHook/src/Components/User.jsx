import { useUser } from '../Context/userContext';

const UserProfile = () => {
  const { user, setUser } = useUser();

  const handleLogin = () => setUser({ name: 'John Doe', isLoggedout: false });

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {user.isLoggedout && <button onClick={handleLogin}></button>}
    </div>
  );
};

export default UserProfile; 