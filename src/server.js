import express from "express";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.join(process.cwd(), "src", "uploads"))));

app.listen(PORT, () => console.log(`server running http://localhost:${PORT}`));
