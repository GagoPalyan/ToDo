import { model, Schema } from "mongoose";

const todosSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    priority: {
      type: Number,
      enum: [1, 2, 3],
      default: 2,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        const { _id, __v, ...todo } = ret;

        return {
          id: _id.toString(),
          ...todo,
        };
      },
    },
  },
);

const TodoModel = model("Todo", todosSchema);

export default TodoModel;
