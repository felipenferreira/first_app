const express = require("express");
const router = express.Router();
// const app = express();

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
  let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
    
    // let item = req.body.id; pega o valor passado através do parâmetro id e atribui a variável item.
    //users.splice(item,1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});
    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
    //console.log("Elemento Removido: ",name);  
});

router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name; //ID do objeto ou Tag: name
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].heigth=req.body.heigth;
    users[req.body.id].vote=req.body.vote;

    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
});

router.get('/cadastro/list', (req, res) => {
  //listar de usuarios cadastrado
  console.log("Olha a lista ae: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    //captura os dados de usuários (users) e transforma o vetor de objetos em uma string JSON, para ser enviada ao cliente
    res.send(JSON.stringify(users));
    // res.status(200).json({
    //     status:'sucess',
    //     data: `Lista foi adiocionado com sucesso!`
});

router.post('/cadastro/add',(req,res)=>{
    
    let user={name:"",email:"",address:"",heigth:"",age:"",vote:""};

    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.heigth = req.body.heigth;
    user.age = req.body.age;
    user.vote = req.body.vote;

    users.push(user);
    console.log("Usuário cadastrado: ", user);
    console.log("Lista dos usuários: ", users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;













// Inserir um usuário
//router.get('/cadastro/insert', (req, res) => {
  //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    //users[req.body.id].name=req.body.name;
    //users[req.body.id].email=req.body.email;
    //users[req.body.id].address=req.body.address;
    //users[req.body.id].age=req.body.age;
    //users[req.body.id].height=req.body.height;
    //users[req.body.id].vote=req.body.vote;

    //console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos

    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
//});