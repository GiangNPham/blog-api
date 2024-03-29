var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

require("dotenv").config();

const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
const createRouter = require("./routes/create");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const deleteRouter = require("./routes/delete");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.dbURL)
  .then(() => app.listen(3000))
  .catch((err) => console.err("database connection error"));

// setting up session
app.use(
  session({
    secret: "key that will sign the cookie",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 },
  })
);

app.use("/", indexRouter);
app.use("/posts", postRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/create", createRouter); // only authorized user can access and create posts
app.use("/delete", deleteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
