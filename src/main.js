import express from "express";
import connectDb from "./db/db.js";
import userRoutes from "./routes/userroutes.js";
import postRoutes from "./routes/postroutes.js";
import ejs from "ejs";

const app = express();

connectDb();

app.use(express.json());

//set the view engine to ejs
app.use(express.static("view"));
app.set("view engine", "ejs");

app.use("/api/v1", userRoutes);
app.use("/api/v1", postRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
