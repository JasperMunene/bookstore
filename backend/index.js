import express from "express";
import { PORT } from "./config.js";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import createRoutes from "./routes/booksRoute.js";

dotenv.config();

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'books',
    password: process.env.PG_PASSWORD,
    port: 5432,
});
db.connect();

const app = express();

app.use(express.json());
app.use(cors());

const booksRouter = createRoutes(db);

// Use the router at the desired path
app.use('/books', booksRouter);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
