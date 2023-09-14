import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post('/api/add_irregularverbs', homeController.addIrregularVerbs);
  router.get('/api/get_irregularverbs_page', homeController.getIrregularVerbsPage);
  return app.use("/", router);

};

module.exports = initWebRoutes;
