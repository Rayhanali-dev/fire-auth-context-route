import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    if(user) {
        return children;
    }

    if(loading){
        return <progress className="progress progress-error w-56" value="70" max="100"></progress>
    }

    return <Navigate to={`/login`} replace={true}></Navigate>
};

export default PrivateRoute;
