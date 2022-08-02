import express from "express";
import controller from "./controller.js";
import images from "../../lib/multer.js";

const router = express.Router();

router.get("/events", controller.GET);
router.post("/events", images, controller.POST)
router.put("/events", controller.PUT);

export default router;
