import express from "express";
import { V1 } from "./routes";

const app = express();
const PORT = 8000;

V1.map((item) => {
    app.use(`/v1/${item.path.replace("/", "")}`, item.router);
});

app.listen(PORT);