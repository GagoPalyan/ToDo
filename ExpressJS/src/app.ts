import express from "express";
import helmet from "helmet";
import compression from "compression";
import todosRouter from "./module/todos/todos.router";
import notFoundMiddleware from "./middleware/not-found.middleware";
import errorMiddleware from "./middleware/error.middleware";

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

app.use("/api/todos", todosRouter);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

export default app;
