const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const address = "localhost";
const utils = require("./utils");
const faker = require("faker");
let toggleBol=true;

app.set('view engine','ejs');

const port = process.env.PORT || 3000;
// const address = "localhost";

// a palavra reservada global cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parta do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
global.users =[];

  for (let cont=0;cont<22;cont++){
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBol});
    toggleBol=!toggleBol;
}
   // {name:"Felipe Ferreira do Nascimento",address:"Rua Janusa Correia, 320",email:"felipeexemplo@gmail.com",age:20,height:1.65,vote:true},
   // {name:"Artur Goes da Silva",address:"Rua Manoel Barbosa, 15",email:"arturexemplo@gmail.com",age:25,height:1.68,vote:true},
   // {name:"Marta Goes da Silva",address:"Rua Manoel Barbosa, 15",email:"martaexemplo@gmail.com",age:50,height:1.79,vote:true}];

// ativa o uso do EJS do express-ejs-layouts
// antes estava no routes.js mas foi movido pro index.js
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//Criando usando rotas simples que estão no arquivo routes.js
app.use ('/', routes);

const server = app.listen(port, () => {
  let port = server.address().port;
  console.log(`Servidor executando na porta ${port}`);
});