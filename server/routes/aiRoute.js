import express from "express";
import { enhanceContent } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/enhance-content", enhanceContent);

export default aiRouter;