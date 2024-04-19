import express from "express";
import swaggerUi from "swagger-ui-express"
import { handleUncaughtErrors } from "./middlewares/error.js";
import specs from "./swagger.js";
import routes from "./routes/index.js";

export function CreateApp() {
  const app = express();

  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs))

  app.use(express.json());

  app.use(routes);

  app.use(handleUncaughtErrors);
  return app;
}
