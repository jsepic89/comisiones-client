import { Navigate } from 'react-router-dom'

import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const user = useContext(UserContext)[0]
    if (!user){
        return <Navigate to='/login' />;
    }
  return children
}

export default ProtectedRoute