import {Request, Response} from 'express';
import conexao from '../services/connection';

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET Departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}

export const lerDepartamento = async (req: Request, res: Response) => {
  console.log('GET Departamento Específico');
  const { id } = req.params;
  console.log('identificador: '+id);
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = ?', [id]);
  console.log('Resultado:', rows);

  try{

    

    const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = ?', [id]);
    
    if (rows.length === 0) {
      res.status(404).json({ mensagem: 'Nenhum resultado encontrado' });
    }else {
      res.json(rows);
    }

    
  }catch(e){
    console.log(e);
  }
}

export const insereDepartamento = async (req: Request, res: Response): Promise<void> => {

  const { nome, sigla } = req.body;
  try{
    const [result] = await conexao.execute(`INSERT INTO DEPARTAMENTOS (nome, sigla) 
      VALUES (?, ?)`, [nome, sigla] );

    res.status(201).json({
      message: 'Departamento criado com sucesso.'
    });
  } catch(e) {
    let message: string;

    switch (e.code) {
      case 'ER_DUP_ENTRY':
        message = 'Registro duplicado'
      break;
      default:
        message = 'Erro interno';
        break;
    }

    res.status(500).json({
      message
    });
  }

  console.log(req.body);
  res.send("Funciona");
}