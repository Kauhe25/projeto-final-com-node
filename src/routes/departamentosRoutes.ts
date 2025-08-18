import { Router } from "express";
import { insereDepartamento, listaDepartamentos, lerDepartamento } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos/:id', lerDepartamento);
//departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.post('/departamentos', insereDepartamento);


export default departamentosRoutes;