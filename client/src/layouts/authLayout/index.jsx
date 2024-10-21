import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const authuser = useSelector((state) => state.auth.user);

  return authuser ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthLayout;
