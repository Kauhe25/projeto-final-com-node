import {Request, Response} from 'express';
import conexao from '../services/connection';

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET Departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}