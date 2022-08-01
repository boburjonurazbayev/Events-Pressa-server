import dotenv from "dotenv";
import path from "path"

dotenv.config({path: path.join(process.cwd(), "src", ".env")});

const SECRET = process.env.JWT_SECRET;

let pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

export { pgConfig, SECRET };