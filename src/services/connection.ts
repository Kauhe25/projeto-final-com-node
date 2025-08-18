import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const conexao = mysql.createPool({
  connectionLimit: 10,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});

export default conexao;