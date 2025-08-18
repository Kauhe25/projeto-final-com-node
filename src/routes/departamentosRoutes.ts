import { Router } from "express";
import { insereDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.post('/departamentos', insereDepartamento);

export default departamentosRoutes;