const express = require("express");
const router = express.Router();

/* linhas de código das rotas relacionadas ao faker e à criação do banco de dados, não vão ser usadas AGORA

const faker = require("faker");
let db = require("./db");
db.criarDB("minhaBaseDados");
*/

/* 1. Especifica a pasta contendo arquivos estáticos;
   2. O nome 'public' não precisará ser colocado na rota; 3. Para serem alcançados os arquivos e pastas que estão dentro dele; 
   4. Por isso na imagem que está na página home.ejs só há o indicativo para 'images';
*/
router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('pages/home');
    // forma não elegante: res.send
});

router.get('/about',(req,res)=>{

    let usuarios=[];
    //Usando o Faker para criar 6 perfis para colocar no about
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    }
    console.log(usuarios);
    res.render('pages/about',{usuarios});
});

// Remover um usuário
router.post('/cadastro/remove',(req,res)=>{
    let usuario={name: "Felipe", email: "felipenferreiraa@gmail.com"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});


// Inserir um usuário
router.get('/cadastro/insert',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});

router.get('/cadastro/list',(req,res)=>{
//listar de usuarios cadastrado
});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;


















/* Alguns exemplos de rotas: 
   1. / = http://localhost:3030/
   2. /about = http://localhost:3030/about
   3. /curriculo =  http://localhost:3030/cadastro


obs: ainda não sei porque as linhas a seguir não foram incluídas na rota dos usuários, vou descobrir (espero...) 

router.get('/curriculo',(req,res)=>{
res.send('Meu currículo');
}); */