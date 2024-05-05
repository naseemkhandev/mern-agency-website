/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import authenticateUser from "../../utils/authenticateUser";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authenticateUser(dispatch);
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
