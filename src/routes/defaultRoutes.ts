import { Router } from "express";
import { rootResponse, pingResponse, listaDepartamentos } from "../controllers/defaultControllers";

const defaultRoutes = Router();
defaultRoutes.get('/', rootResponse);
defaultRoutes.get('/ping', pingResponse);
defaultRoutes.get('/departamentos', listaDepartamentos);

export default defaultRoutes;