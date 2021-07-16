import { ConnectionOptions } from "typeorm";
import {Product} from "../models"

const dbConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "PETERdinis1234",
  database: process.env.POSTGRES_DB || "calculatordb",
  entities: [Product],
  synchronize: true,
  name: "products"
};

export default dbConfig;