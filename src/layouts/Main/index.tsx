import { Container, MainContent, UsersBar } from './styles';
import UsersList from './components/UsersList';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <UsersBar>
        <UsersList />
      </UsersBar>
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default MainLayout;
