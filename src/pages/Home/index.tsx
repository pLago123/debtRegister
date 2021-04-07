import { useEffect } from 'react';
import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import useUserData from '../../hooks/useUserData';
import Image from '../../assets/party.svg';

interface UserData {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const { selectUser } = useUserData();

  useEffect(() => {
    selectUser({} as UserData);
  }, [selectUser]);

  return (
    <Container>
      <PageHeader
        title="Bem vindo à aplicação!"
        subtitle="navegue pelo menu de usuários ao lado, ou acima se estiver no celular"
      />
      <img src={Image} alt="people throwing a party" />
    </Container>
  );
};

export default Home;
