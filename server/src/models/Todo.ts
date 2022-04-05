import { Document, Model, model, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isCompleted: boolean;
}

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  year: {
    type: Number,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
