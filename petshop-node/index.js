const http = require('http');
const petshop = require("./petshop");
const url = require("url");

http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});

    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;
    let novoPet = queryString;
    //console.log(urlCompleta);

    switch(rota){
        case "/pets":
            let conteudo = petshop.listarPet();
            if(conteudo.length > 0){
            res.write(conteudo);
            } else {
                res.write("nenhum pet cadastrado");
            }
            break;
        case "/pets/add":
            
            if (petshop.adicionarPet(novoPet)){
                res.write(`${novoPet.nome}, adicionado a lista`);
            
            } else {
                res.write("Pet nao adicionado");
            }
            break;
        case "/pets/buscar":
            if(petshop.buscarPet(novoPet)){
                res.write(`${novoPet.nome} Encontrado`);
            }else{
                res.write(`${novoPet.nome} não Encontrado`);
            };
            break;
        default:
            res.write("tô perdido");
    }

    res.end();
}).listen(3000, "localhost", () => {
    console.log("servidor rodando :)");
});