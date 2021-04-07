import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Container, TopMenu, UserButton, UserListWrapper } from './styles';
import useUserData from '../../../../hooks/useUserData';
import Input from '../../../../components/Input';

interface UserData {
  id: number;
  name: string;
}

interface RouteParams {
  id: string;
}

const UsersList: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { users, activeUser, selectUser } = useUserData();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const targetRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const foundUser = users.find(user => user.id === Number(id));
    if (foundUser) selectUser(foundUser);
  }, [users, selectUser, id]);

  useEffect(() => {
    if (!activeUser) history.push('/');
  }, [activeUser, history]);

  const handleSelectUser = useCallback(
    (user: UserData) => {
      selectUser(user);
      setOpen(false);
      history?.push(`/user/${user.id}`);
    },
    [history, selectUser],
  );

  const handleOpenTopMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleUpdateQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }, []);

  const handleSearch = useCallback(
    (data: UserData[]) => {
      return data.filter(
        user => user.name.toLowerCase().indexOf(query.toLowerCase()) >= 0,
      );
    },
    [query],
  );

  return (
    <Container ref={containerRef}>
      <TopMenu>
        <button type="button" onClick={() => handleOpenTopMenu()}>
          {activeUser.name}
          {open ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
        </button>
      </TopMenu>
      <UserListWrapper isOpen={open.toString()}>
        <div style={{ marginBottom: 20 }}>
          <Input
            name="field"
            type="text"
            placeholder="Busque por qualquer nome"
            onChange={handleUpdateQuery}
          />
        </div>
        {handleSearch(users).map(user => (
          <UserButton
            type="button"
            active={user.id === activeUser.id}
            ref={user.id === activeUser.id ? targetRef : null}
            key={user.name}
            onClick={() => handleSelectUser(user)}
          >
            {user.name}
          </UserButton>
        ))}
      </UserListWrapper>
    </Container>
  );
};

export default UsersList;
