import Task from "../models/Task.js";


// @desc     Get all tasks (Admin:All, User:Assigned)
// @route    GET /api/tasks/
// @access   Private
export const getTasks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Get task by ID
// @route  GET /api/tasks/:id
// @access Private
export const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Create a new task (Admin Only)
// @route  POST /api/tasks/
// @access Private (Admin)
export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, assignedTo, attachments, todoCheckList } = req.body;
    if(!Array.isArray(assignedTo)) {
        return res.status(400).json({ message: "Assigned To must be an array" });
    }

    const task = await Task.create({
        title, 
        description,
        priority,
        dueDate,
        assignedTo,
        attachments,
        todoCheckList,
        createdBy: req.user._id,
    })

    res.status(201).json({message: "Task created successfully", task})
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Update task details
// @route  PUT /api/tasks/:id
// @access Private
export const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Delete a task (Admin Only)
// @route  DELETE /api/tasks/:id
// @access Private (Admin)
export const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Update task status
// @route  PUT /api/tasks/:id/status
// @access Private
export const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Update task checklist
// @route  PUT /api/tasks/:id/todo
// @access Private
export const updateTaskCheckList = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Dashboard Data (Admin Only)
// @route  GET /api/tasks/dashboard-data
// @access Private (Admin)
export const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc   Dashboard Data (User-Specific)
// @route  GET /api/tasks/user-dashboard-data
// @access Private
export const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
