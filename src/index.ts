import express, {Request, Response} from 'express';

const app = express();
const porta = 3030;

// Carregando a rota raiz
app.get('/', (req: Request, res: Response): void => {
  res.send('Executando a node js API Rest')
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`)
});