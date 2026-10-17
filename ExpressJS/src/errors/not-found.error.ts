import AppError from "./app.error";

class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(404, message);
  }
}

export default NotFoundError;
