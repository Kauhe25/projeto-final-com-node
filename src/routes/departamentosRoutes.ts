import { Router } from "express";
import { insereDepartamento, listaDepartamentos, lerDepartamento, excluiDepartamento, alteracaoDepartamento } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos/:id', lerDepartamento);
departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.post('/departamentos', insereDepartamento);
departamentosRoutes.delete('/departamentos/:id', excluiDepartamento);
departamentosRoutes.patch('/departamentos/:id', alteracaoDepartamento);
export default departamentosRoutes;