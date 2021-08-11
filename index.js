const express = require("express");
const app = express();

const port = 3000;
const address = "localhost";
// o local host é o nome padrão do computador e está ligado ao IP 127.0.0.1 (tcp-ip)

const server = app.listen(port, address, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});