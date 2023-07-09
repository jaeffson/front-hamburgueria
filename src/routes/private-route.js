import PropTypes from 'prop-types';
import { Navigate} from 'react-router-dom';
import { Header } from '../components/Header/index';

const PrivateRoute = ( {children} ) => {
 
  const user = localStorage.getItem('burger:userData');


  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (children.props.isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
        <>
      {!children.props.isAdmin && <Header />}
      {children}
    </>
  )
}
PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
  }


export default PrivateRoute;
