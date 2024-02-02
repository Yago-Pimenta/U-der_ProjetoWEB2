import mysql from 'mysql'

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root" ,
  database : "db"
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');

  // Comando SQL para criar tabela
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      data_nascimento DATE,
      idade INT,
      email VARCHAR(255) UNIQUE NOT NULL,
      senha VARCHAR(255) NOT NULL,
      cpf VARCHAR(14) UNIQUE NOT NULL,
      sexo ENUM('M', 'F', 'O') -- 'M' para Masculino, 'F' para Feminino, 'O' para Outro
    );
  `;

  // Executar o comando SQL para criar a tabela
  connection.query(createTableQuery, (err, results) => {
    if (err) throw err;
    console.log('Tabela de usuários criada com sucesso!');
    // Fechar a conexão após a criação da tabela
    connection.end();
  });
});