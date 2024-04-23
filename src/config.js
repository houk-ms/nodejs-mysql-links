import { config } from "dotenv";
import fs from 'fs';
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "fazt",
  password: process.env.DATABASE_PASSWORD || "mypassword",
  database: process.env.DATABASE_NAME || "linksdb",
  port: process.env.DATABASE_PORT || 3306,
  ssl: {
    // Path to the downloaded SSL certificate bundle
    ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem", "utf-8")
  }
};

export const port = process.env.PORT || 80;

export const SECRET = process.env.SECRET || 'some secret key';