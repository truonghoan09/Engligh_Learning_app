import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post('/api/add_irregularverbs', homeController.addIrregularVerbs);
  return app.use("/", router);

};

module.exports = initWebRoutes;
