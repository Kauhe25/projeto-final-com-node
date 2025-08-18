import {Request, Response} from 'express';

export const rootResponse = (req: Request, res: Response): void => {
  res.send('Executando a node js API Rest com Rota')
}

export const pingResponse = (req: Request, res: Response): void => {
  res.send('Pong')
}