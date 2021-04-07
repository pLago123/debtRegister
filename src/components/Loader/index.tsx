import { Circle, Container, SVG } from './styles';

interface LoaderProps {
  size: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size, color }) => {
  return (
    <Container size={size}>
      <SVG size={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <Circle
          color={color}
          cx="50%"
          cy="50%"
          r="40"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </SVG>
    </Container>
  );
};

export default Loader;
