import React, {  useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    console.log('privateroute:',location);


    if(loading){
         return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
      return children;
    }
    return <Navigate to="/Login"></Navigate>
};

export default PrivateRoute;