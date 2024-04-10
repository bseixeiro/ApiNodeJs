import express from "express";
// import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./route/index.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());

  // file uploads middlware configuration
  app.use(routes);

//   app.use(handleUncaughtErrors);
  return app;
}
