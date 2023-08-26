import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post('/api/write_an_object', homeController.writeAnObject);
  return app.use("/", router);

};

module.exports = initWebRoutes;
