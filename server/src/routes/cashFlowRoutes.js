import express from "express";
const router = express.Router();

import * as cashFlowController from "../controllers/cashFlowController.js";

//define routes

router.get("/getAllcashFlow", cashFlowController.getAllEntries);
router.get("/getCashFlowById/:id", cashFlowController.getEntryById);
router.post("/createCashFlow", cashFlowController.createEntry);
router.patch("/updateCashFlowById/:id", cashFlowController.updateEntryById);
router.delete("/deleteCashFlowById/:id", cashFlowController.deleteEntryById);

export default router;
