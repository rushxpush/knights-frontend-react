import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export function ProtectedRoute({children}: any) {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {

  }, [])

  const navigateToLoginPage = () => {
    navigate('/login');
  }

  return (token ? children : <Navigate to='/login' />);

}