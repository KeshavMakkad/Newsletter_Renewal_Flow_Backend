import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import FlowRoutes from "./routes/FlowRoutes.js";
import connectToDB from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", FlowRoutes);

connectToDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 673c19052d7b96fcc552f09f
