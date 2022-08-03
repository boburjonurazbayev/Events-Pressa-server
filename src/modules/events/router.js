import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.get("/events", controller.GET);
router.post("/events", controller.POST);
router.put("/events", controller.PUT);

export default router;
