import Todo from "../models/Todo.js";

export const index = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

export const show = async (req, res) => {
  try {
    const todo = await Todo.findById({ _id: req.params.id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

export const store = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const stored = await todo.save();
    res.status(201).json(stored);
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};
