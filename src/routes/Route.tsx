import { Route, RouteProps } from 'react-router-dom';
import MainLayout from '../layouts/Main';

interface CustomRouteProps extends RouteProps {
  childComponent: React.ElementType;
  noMatch?: boolean;
}

const RouteWrapper: React.FC<CustomRouteProps> = ({
  childComponent: Component,
  noMatch,
  ...rest
}) => {
  return !noMatch ? (
    <Route
      {...rest}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  ) : (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default RouteWrapper;
