import { Schema, model } from "mongoose";

const schemaDefinition = {
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
};

const schema = new Schema(schemaDefinition);
const Todo = model("Todos", schema);

export default Todo;
