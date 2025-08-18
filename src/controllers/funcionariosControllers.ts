import {Request, Response} from 'express';
import conexao from '../services/connection';

export const listaFuncionarios = async (req: Request, res: Response) => {
  console.log('GET Funcionarios');

  const [rows] = await conexao.query('SELECT * FROM FUNCIONARIOS ORDER BY NOME ASC');
  res.json(rows);
}