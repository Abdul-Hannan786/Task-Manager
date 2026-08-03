import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useLocation } from "react-router-dom";

const CreateTask = () => {
  const location = useLocation();
  const { taskId } = location.state || {};

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueData: null,
    assignedTo: [],
    todoCheckList: [],
    attachments: [],
  });
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleValueChange = (key, value) => {
    setTaskData((prevData) => ({ ...prevData, [key]: value }));
  };

  const clearData = () => {
    // Reset Form
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueData: null,
      assignedTo: [],
      todoCheckList: [],
      attachments: [],
    });
  };

  return <DashboardLayout activeMenu="Create Task"></DashboardLayout>;
};

export default CreateTask;
