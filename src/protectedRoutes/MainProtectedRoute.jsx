import React, { use, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function MainProtectedRoute({ children }) {
  // const { authToken } = useAuth();
  // const isLoggedIn = !!authToken.token && !!localStorage.getItem('token')  ;

  // return (
  //   <>
  //     {isLoggedIn ?children :<Navigate to="/signin" /> }
  //   </>
  // )


  // const { authToken, loading } = useAuth();
  // if (loading) return <div>Loading...</div>;
  // if (authToken.token) return <Navigate to="/signin"  />;


    const { authToken } = useAuth();
    if (!localStorage.getItem('token') && !authToken.token) return <Navigate to="/signin"  />;

  
  return children
}
