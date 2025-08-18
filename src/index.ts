import express from 'express';
import defaultRoutes from './routes/defaultRoutes';

const app = express();
const porta = 3030;

app.use(defaultRoutes);

// Carregando a rota raiz
/*app.get('/', (req: Request, res: Response): void => {
  res.send('Executando a node js API Rest')
});*/

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`)
});