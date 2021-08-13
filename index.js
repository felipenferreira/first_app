const express = require("express");
const app = express();
const routes = require("./routes");
//antes tava no routes,js mas veio pro index.js
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port = process.env.PORT || 3000;
// const address = "localhost";
// o local host é o nome padrão do computador e está ligado ao IP 127.0.0.1 (tcp-ip)

// a palavra reservada global cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parta do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
global.users =[
    {name:"Wellington W. F. Sarmento",address:"Rua Dom Jeronimo, 666",email:"wwagner@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"PAtricia S. Paula",address:"Rua Dom Jeronimo, 666",email:"patricia@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"Henrique Sérgio L. Pequeno",address:"Rua do Henrique, 666",email:"henrique@virtual.ufc.br",age:46,height:1.70,vote:true}];

// ativa o uso do EJS do express-ejs-layouts
// antes estava no routes.js mas foi movido pro index.js
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//Criando usando rotas simples que estão no arquivo routes.js
app.use ('/', routes);

const server = app.listen(port, () => {
  // let host = server.address().address;
  let port = server.address().port;
  console.log(`Servidor executando na porta ${port}`);
});