import {Request, Response} from 'express';
import conexao from '../services/connection';

export const rootResponse = (req: Request, res: Response): void => {
  res.send('Executando a node js API Rest com Rota')
}

export const pingResponse = (req: Request, res: Response): void => {
  res.send('Pong')
}

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET Departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}