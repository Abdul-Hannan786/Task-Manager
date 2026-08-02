import React, { useContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const Dashboard = () => {
  useUserAuth();
  const { user } = useContext(UserContext);
  return <DashboardLayout activeMenu="Dashboard">Dashboard</DashboardLayout>;
};

export default Dashboard;
