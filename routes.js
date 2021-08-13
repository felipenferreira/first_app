const express = require("express");
const router = express.Router();
const app = express();

/* linhas de código das rotas relacionadas ao faker e à criação do banco de dados, não vão ser usadas AGORA

const faker = require("faker");
let db = require("./db");
db.criarDB("minhaBaseDados");
*/

router.use(express.static('public'));

router.get('/', (req, res) => { //callback - função que trata dado evento GET
  res.render('pages/home');
});

router.get('/about', (req, res) => { //callback - função que trata dado evento GET
  res.render('pages/about');
});

router.get('/cadastro', (req, res) => { //callback - função que trata dado evento GET
  res.render('pages/cadastro', { users: users });
});

// Remover um usuário
router.post('/cadastro/remove', (req, res) => {
  let item = req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 

  users.splice(item, 1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
  //res.render('pages/cadastro',{users:users});
  console.log("Elementos cadastrados: ", users);
  res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
});

// Inserir um usuário
router.get('/cadastro/insert', (req, res) => {
  //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos

    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
});

router.get('/cadastro/list', (req, res) => {
  //listar de usuarios cadastrado
});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;














/* Sobre o 'public' (routes.js, linha 12):
   1. Especifica a pasta contendo arquivos estáticos;
   2. O nome 'public' não precisará ser colocado na rota; 3. Para serem alcançados os arquivos e pastas que estão dentro dele;
   4. Por isso na imagem que está na página home.ejs só há o indicativo para 'images'; */

// forma não elegante de fazer: res.send

/* Alguns exemplos de rotas:
   1. / = http://localhost:3030/
   2. /about = http://localhost:3030/about
   3. /curriculo =  http://localhost:3030/cadastro


obs: ainda não sei porque as linhas a seguir não foram incluídas na rota dos usuários, vou descobrir (espero...)

router.get('/curriculo',(req,res)=>{
res.send('Meu currículo');
}); */