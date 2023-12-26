import express from "express";
const router = express.Router();

import * as roleDetailsController from "../controllers/roleDetailsController.js";

//define routes

// router.get("/",roleDetailsController.)
router.post("/createRole", roleDetailsController.createRole);
// router.patch("/",roleDetailsController.)
// router.delete("/",roleDetailsController.)

export default router;
