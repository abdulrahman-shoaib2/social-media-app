import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function AuthProtectedRoute({ children }) {
  // if (loading) return <div>Loading...</div>;
  // if (authToken.token) return <Navigate to="/"  />;


  // const isLoggedIn = !!authToken.token && !!localStorage.getItem('token')  ;
  // return (
  //   <>
  //     {isLoggedIn ? <Navigate to="/"  />:children}
  //   </>
  // )
  // if (loading) return <PageSpinner />;

  const { authToken, loading } = useAuth();
  if (localStorage.getItem('token') && authToken.token ) return <Navigate to="/"  />;

  return children
}
