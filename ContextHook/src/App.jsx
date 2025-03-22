import { UserProvider } from './Context/userContext';
import User from './Components/User';

const App = () => (
  <UserProvider>
    <User />
  </UserProvider>
);

export default App;