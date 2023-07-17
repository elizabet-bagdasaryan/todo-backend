import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./config/mongo.js";
import todosRoutes from "./routes/todoRoutes.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();

connection();

app.use(express.json());
app.use(bodyParser.json());
app.use("/", ...swaggerMiddleware());

app.use("/api/todos", todosRoutes);

app.listen(process.env.PORT || 3000);
