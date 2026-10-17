import app from "./app";
import connectDataBase from "./config/database";
import env from "./config/env";

const server = async () => {
  await connectDataBase();

  app.listen(env.PORT, () => {
    console.log("Server is working correctly!");
  });
};

server();
