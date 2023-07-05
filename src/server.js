import express from "express";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./mongo.js";
import cookieParser from "cookie-parser";

import todosRoutes from "./routes/todos.js";

const app = express();
dotenv.config();

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/todos", todosRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
