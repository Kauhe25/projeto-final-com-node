import { Router } from "express";
import { listaFuncionarios } from "../controllers/funcionariosControllers";

const funcionariosRoutes = Router();
funcionariosRoutes.get('/funcionarios', listaFuncionarios);

export default funcionariosRoutes;