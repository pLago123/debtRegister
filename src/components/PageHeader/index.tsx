import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Header, HeaderImage, HeaderWrapper } from './styles';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  canGoBack?: boolean;
  image?: string;
}

interface RouteParams {
  id: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  canGoBack,
  image,
}) => {
  const { id } = useParams<RouteParams>();
  return (
    <HeaderWrapper>
      <Header>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {canGoBack && (
          <div>
            <Link to={`/user/${id}`}>
              <BsArrowLeftShort size={20} /> <p>Voltar para detalhes</p>
            </Link>
          </div>
        )}
      </Header>
      {image && (
        <HeaderImage>
          <img src={image} alt="ilustração" />
        </HeaderImage>
      )}
    </HeaderWrapper>
  );
};

export default PageHeader;
