import { Container, Content } from './styles';
import Image from '../../assets/puzzle.svg';

const MissingRoute: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>404</h1>
        <img src={Image} alt="woman holding giant puzzle piece" />
      </Content>
    </Container>
  );
};

export default MissingRoute;
