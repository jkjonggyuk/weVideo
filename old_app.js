// // import express
// // const express = require('express')
// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// // execute (make an app with it)
// const app = express()

// const PORT = 4000;

// // function handleListening() {
// //     console.log(`Listening on: http://localhost:${PORT}`);
// // }
// const handleListening = () => 
//     console.log(`Listening on: http://localhost:${PORT}`);

// const handleHome = (req, res) => res.send("Hello from home");

// // Arrow function
// const handleProfile = (req, res) => res.send("You are on my profile");

// // Middleware
// const betweenHome = (req, res, next) => {
//     console.log("I'm in between");
//     next();
// }

// app.use(betweenHome);

// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(helmet());
// app.use(morgan("dev"));

// const middleware = (req, res, next) => {
//     res.send("not happening");
// }

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

// // adding a callback function, handleListening()
// app.listen(PORT, handleListening);