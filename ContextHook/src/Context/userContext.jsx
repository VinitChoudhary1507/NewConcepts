// context/UserContext.js
import { createContext, useContext, useState } from 'react';

// 1. Create the context
const UserContext = createContext();

// 2. Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', isLoggedout: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
    {children}
    </UserContext.Provider>
  );
};

// 3. Custom hook to consume context
export const useUser = () => useContext(UserContext);
