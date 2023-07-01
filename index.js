require("dotenv").config();
const cors = require("cors");
const path = require("path");

const express = require("express");
const app = express();
const productRouter = require("./routers/product");
const userRouter = require("./routers/user");

app.use(cors());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use(express.json());
app.use("/products", productRouter.routers);
app.use("/users", userRouter.routers);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at localhost:${process.env.PORT}`);
});
