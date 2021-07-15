import "reflect-metadata";
import { createConnection } from "typeorm";
import express, {Request, Response, Application} from "express";
import morgan from "morgan";
import chalk from "chalk";
import helmet from "helmet";
import dbConfig from "./config/database";

const app: Application = express();
const PORT = 4001;

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
    res.send("TEST");
})

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });

app.listen(PORT, () => {
    chalk.green.inverse("Applikácia beží na porte 4000");
})