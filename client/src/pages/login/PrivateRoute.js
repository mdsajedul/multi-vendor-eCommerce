import React from 'react'
import useAuth from '../hooks/useAuth'
import {Navigate} from "react-router-dom"

export default function PrivateRoute({children}) {
    const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to ="/"/>
}
