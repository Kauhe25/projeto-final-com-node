import { Router } from "express";
import { insereDepartamento, listaDepartamentos, lerDepartamento, excluiDepartamento, alteracaoDepartamento } from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos/:id', lerDepartamento);
departamentosRoutes.get('/departamentos',  listaDepartamentos);
departamentosRoutes.post('/departamentos', validaDepartamento, insereDepartamento);
departamentosRoutes.delete('/departamentos/:id', excluiDepartamento);
departamentosRoutes.patch('/departamentos/:id', validaDepartamento, alteracaoDepartamento);
export default departamentosRoutes;