import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

todoSchema.statics.createTodo = async function (description) {
  const todo = new this({
    description,
    completed: false,
  });
  return todo.save();
};

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
