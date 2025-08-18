import { Router } from "express";
import { listaDepartamentos } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();
departamentosRoutes.get('/departamentos', listaDepartamentos);

export default departamentosRoutes;