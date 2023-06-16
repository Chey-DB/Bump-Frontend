import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRouteWrapper = ({ children, loggedIn }) => {
    const location = useLocation();
    return loggedIn ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRouteWrapper;
