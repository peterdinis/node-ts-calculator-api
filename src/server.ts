import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import chalk from "chalk"
import dbConfig from "./config/database";
import productRoutes from "./routes/productRoutes";
import swaggerUi from "swagger-ui-express";

const app: Application = express();

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Test route");
});

app.use(productRoutes);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);


// json parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(productRoutes);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(4200, () => {
      console.log(chalk.green.inverse("Server is running on port", 4200));
    });
  })
  .catch((err) => {
    console.log(chalk.red.inverse("Unable to connect to db", err));
  });