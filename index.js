import express from "express";
import mysql from "mysql";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db"
});

con.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida');
  }
});

// Defina a rota / para servir o arquivo index.html.
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, `${page}.html`);
  res.sendFile(filePath);
});

app.get('/entrar.html', (req, res) => {
  const filePath = path.join(__dirname, 'entrar.html');
  res.sendFile(filePath);
});
app.get('/registrar.html', (req, res) => {
    const filePath = path.join(__dirname, 'registrar.html');
    res.sendFile(filePath);
  });

  app.post('/registrar.html', (req, res) => {
    console.log(req.body);
    const postData = req.body;
  
    // Consulta SQL para inserir os dados no banco de dados
    const insertQuery = 'INSERT INTO usuarios (nome,  idade, email, senha,  cpf) VALUES (?, ?, ?, ?, ?)';
  
    con.query(
      insertQuery,
      [postData.nome,postData.idade, postData.email, postData.senha, postData.cpf,postData.sexo],
      (err, results) => {
        if (err) {
          console.error('Erro ao inserir dados no banco de dados:', err);
          res.status(500).send('Erro ao inserir dados no banco de dados.');
        } else {
          console.log('Dados inseridos com sucesso!');
          res.redirect('/'); // Rota de sucesso
        }
      }
    );
  });
  app.post('/entrar.html', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
  
    const sql = 'SELECT * FROM user WHERE email = ? AND senha = ?';
    con.query(sql, [email, senha], (err, results) => {
      if (err) {
        console.error('Erro na consulta:', err);
        res.status(500).send('Erro ao realizar a consulta no banco de dados');
      } else if (results.length > 0) {
        // Usuário autenticado com sucesso
        res.redirect('/'); // Redireciona para a página inicial
      } else {
        // Credenciais inválidas
        res.send('Credenciais inválidas');
      }
    });
  });
  
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});

  