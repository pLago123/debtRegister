import { useContext } from 'react';
import { UserContext, UserContextData } from '../contexts/UserContext';

const useUserData = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserData must be used inside an UserProvider');
  }

  return context;
};

export default useUserData;
