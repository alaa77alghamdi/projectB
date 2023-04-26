import express, { Application} from "express";

import { connectDB } from "./config/db";




const app: Application = express();
app.use(express.json());
let port: number = 3005;
connectDB()




app.listen(port, () => console.log(`express server listening on port ${port}`));