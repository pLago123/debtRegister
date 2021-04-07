import { Container } from './styles';
import Image from '../../assets/puzzle.svg';

const MissingRoute: React.FC = () => {
  return (
    <Container>
      <h1>404</h1>
      <img src={Image} alt="woman holding giant puzzle piece" />
    </Container>
  );
};

export default MissingRoute;
