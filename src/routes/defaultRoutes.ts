import { Router } from "express";
import { rootResponse, pingResponse,  } from "../controllers/defaultControllers";

const defaultRoutes = Router();
defaultRoutes.get('/', rootResponse);
defaultRoutes.get('/ping', pingResponse);

export default defaultRoutes;