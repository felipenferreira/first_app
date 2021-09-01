// padrão de design: nvc
// ()={} - Arrow Function
// Para parar o servidor = CTRL + C
// boa prática de programação - estrutura dos arquivos e páginas (por ex: public pras partes estáticas da aplicação e views pras partes dinâmicas)
// o local host é o nome padrão do computador e está ligado ao IP 127.0.0.1 (tcp-ip)



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