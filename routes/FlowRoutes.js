import express from "express";
import { startFlow, updateFlow } from "../controllers/FlowController.js";

const router = express.Router();

router.post("/start", startFlow);
router.put("/update", updateFlow);

export default router;
