import {Request, Response} from 'express';
import conexao from '../services/connection';
import { ResultSetHeader } from 'mysql2';

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET Departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}

export const lerDepartamento = async (req: Request, res: Response) => {
  console.log('GET Departamento Específico');

  try{
    const { id } = req.params;
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



export const excluiDepartamento = async (req: Request, res: Response) => {
  console.log('DELETE Departamento Específico');
  const { id } = req.params;
  
  try{
    const [result] = await conexao.execute<ResultSetHeader>(
      'DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?', [id]
    );
   
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Departamento não encontrado' });
    }

    res.json({ mensagem: 'Departamento excluído com sucesso', id });
    return;
  }catch(e){
    let message = '';

    switch (e.code) {
      case 'ER_ROW_IS_REFERENCED_2':
        message = 'Departamento possui vínculos e não pode ser excluído';
      break;
      default:
        message = 'Erro interno';
      break;
    }
    res.status(500).json({
      message
    })

    console.error(e);
    res.status(500).json({ mensagem: 'Erro ao excluir departamento' });
  }
}




export const alteracaoDepartamento = async (req: Request, res: Response): Promise<void> => {

  const { nome, sigla } = req.body;
  const { id } = req.params;
  try{
    const [result] = await conexao.execute(`UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?`, [nome, sigla, id] );

    res.status(201).json({
      message: 'Departamento alterado com sucesso.'
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
}