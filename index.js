const express = require("express");
const app = express();
const routes = require("./routes");
//antes tava no routes,js mas veio pro index.js
const expressLayouts = require("express-ejs-layouts");

const port = process.env.PORT || 3000;
// const address = "localhost";
// o local host é o nome padrão do computador e está ligado ao IP 127.0.0.1 (tcp-ip)

// ativa o uso do EJS do express-ejs-layouts
// antes estava no routes.js mas foi movido pro index.js
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use ('/', routes);

const server = app.listen(port, () => {
  // let host = server.address().address;
  let port = server.address().port;
  console.log(`Servidor executando na porta ${port}`);
});