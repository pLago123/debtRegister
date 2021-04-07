import { Container } from './styles';
import CreateDebtForm from '../../components/CreateDebtForm';
import PageHeader from '../../components/PageHeader';
import useUserData from '../../hooks/useUserData';
import PaymentImage from '../../assets/paying.svg';

const NewDebt: React.FC = () => {
  const { activeUser } = useUserData();
  return (
    <Container>
      <PageHeader
        title="Cadastrar nova dívida"
        subtitle={`Nova dívida para ${activeUser.name}`}
        canGoBack
        image={PaymentImage}
      />
      <CreateDebtForm method="post" />
    </Container>
  );
};

export default NewDebt;
