require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const timeout = require("connect-timeout");

app.use(cors());
app.use("/img", express.static("my_python/test/output/"));
app.use(timeout("2000s"));
app.use(bodyParser.json({ limit: "50mb" })); //body 의 크기 설정
// app.use(bodyParser({ limit: "4MB" }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/", router);

app.use((req, res, next) => {
  const err = new Error("Not Found Request URL");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const error = err;
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({
    errMessage: error.message,
    success: false,
  });
});
app.listen(4000, () => {
  console.log("server is running on 4000 port");
});
