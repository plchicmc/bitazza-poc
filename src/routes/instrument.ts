import { Router } from "express";
import { InstrumentController } from "../controllers/InstrumentController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();


router.get("/", [checkJwt],  InstrumentController.getAllInstrumentsByOSMId);
export default router;