import express from 'express';
import defaultRoutes from './routes/defaultRoutes';
import departamentosRoutes from './routes/departamentosRoutes';
import funcionariosRoutes from './routes/funcionariosRoutes';

const app = express();
const porta = 3030;

app.use(defaultRoutes);
app.use(departamentosRoutes);
app.use(funcionariosRoutes);

// Carregando a rota raiz
/*app.get('/', (req: Request, res: Response): void => {
  res.send('Executando a node js API Rest')
});*/

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`)
});