import mongoose from "mongoose";
import env from "./env";

const connectDataBase = async () => {
  const mongoUri = env.MONGODB_URI;

  await mongoose.connect(mongoUri);
};

export default connectDataBase;
