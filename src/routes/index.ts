import { Router, Request, Response } from "express";
import auth from "./auth";
import instrument from "./instrument";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/instrument", instrument);

export default routes;
