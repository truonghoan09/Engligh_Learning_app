const configViewEngine = require('./config/viewEngine')
const initWebRoutes = require("./route/web")
import {initializeApp} from "firebase/app" 
require("dotenv").config();
var cors = require('cors')

var express = require('express');
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

initializeApp(firebaseConfig);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
