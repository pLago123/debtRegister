import { createContext, useCallback, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import useToast from '../hooks/useToast';
import usersApi from '../services/usersApi';

interface User {
  id: number;
  name: string;
}

export interface UserContextData {
  users: User[];
  activeUser: User;
  selectUser: (user: User) => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

const UserProvider: React.FC = ({ children }) => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState<User>({} as User);

  const selectUser = useCallback((user: User) => {
    setActiveUser(user);
  }, []);

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const { data } = await usersApi.get('/');
        setUsersData(data);
        setLoading(false);
      } catch (err) {
        // console.warn(err.status, err.message);
        addToast({
          title: 'Erro!',
          description: 'Não foi possível buscar dados dos usuários',
          type: 'error',
        });
        setLoading(false);
      }
    };
    getUsers();
  }, [setLoading, addToast]);

  return (
    <UserContext.Provider value={{ users: usersData, activeUser, selectUser }}>
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader size={50} color="#e7b057" />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default UserProvider;
