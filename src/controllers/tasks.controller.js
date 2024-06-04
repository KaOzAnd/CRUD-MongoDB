import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user");
  res.json(tasks);
};

export const createTasks = async (req, res) => {
  const { title, descripcion } = req.body;
  const newTask = new Task({ title, descripcion, date, user: req.user.id });
  const saveTasks = await newTask.save();
  res.json(saveTasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const deleteTasks = async (req, res) => {
  const deleteTasks = await Task.findByIdAndDelete(req.params.id);
  if (!deleteTasks)
    return res.status(404).json({ message: "task not deleted" });
    return res.status(204).json({ message: "task deleted" });
};

export const updateTasks = async (req, res) => {
  const updateTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateTasks) return res.status(404).json({ message: "Task not found" });
  res.json(updateTasks);
};
