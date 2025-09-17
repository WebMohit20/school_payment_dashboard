import connectDB from "./db/db.js"
import dotenv from "dotenv";
import app from "./app.js";
import path from "path"
dotenv.config();
// import { insertOrders,insertOrderStatuses } from "./utils/seeds.js";
const __dirname = path.resolve();

connectDB()


app.listen(process.env.PORT, () => {
    console.log('app is running on ', process.env.PORT);
})