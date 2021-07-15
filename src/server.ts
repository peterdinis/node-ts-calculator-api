import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import dbConfig from "./config/database";

const app: Application = express();

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("TEST");
})

// json parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(4200, () => {
      console.log("Server is running on port", 4200);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
  });