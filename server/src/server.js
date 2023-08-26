import express from "express";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web";

require("dotenv").config();

const app = express();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ6eo7x-Lrk5X_8B2EHNC52HlLhV9VP6U",
    authDomain: "english-learning-ce6f5.firebaseapp.com",
    projectId: "english-learning-ce6f5",
    storageBucket: "english-learning-ce6f5.appspot.com",
    messagingSenderId: "203201765556",
    appId: "1:203201765556:web:0c931a8d0403ad152c77e1",
    measurementId: "G-0K3CBF6CTC",
    databaseURL: "https://english-learning-ce6f5-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const databaseURL = 'http://127.0.0.1:9000/'; // Đổi URL này để trỏ đến Emulator
// const db = getDatabase(databaseURL);
const db = getDatabase(database);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 6969;

module.exports = db;

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});