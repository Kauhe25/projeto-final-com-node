import mysql from 'mysql2/promise';

const conexao = mysql.createPool({
  connectionLimit: 10,
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'AULA'
});

export default conexao;