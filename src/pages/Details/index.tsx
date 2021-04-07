import { Container } from './styles';
import CreateDebtForm from '../../components/CreateDebtForm';
import PageHeader from '../../components/PageHeader';
import FormImage from '../../assets/form.svg';

const Details: React.FC = () => {
  return (
    <Container>
      <PageHeader
        title="Detalhes do débito"
        subtitle="Atualizar dados do débito"
        image={FormImage}
        canGoBack
      />
      <CreateDebtForm method="put" />
    </Container>
  );
};

export default Details;
