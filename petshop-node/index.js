const http = require('http');
const petshop = require("./petshop");
const url = require("url");

http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});

    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;
    let pet = queryString;
    
    //console.log(urlCompleta);

    switch(rota){
        case "/":
            res.write(petshop.PETSHOP);
            break;
        case "/pets":
            let conteudo = petshop.listarPet();
            if(conteudo.length > 0){
            res.write(conteudo);
            } else {
                res.write("nenhum pet cadastrado");
            }
            break;
        case "/pets/add":
            
            if (petshop.adicionarPet(pet)){
                res.write(`${pet.nome}, adicionado a lista`);
            
            } else {
                res.write("Pet nao adicionado");
            }
            break;
        case "/pets/buscar":
            if(petshop.buscarPet(pet)){
                res.write(`${pet.nome} Encontrado`);
            }else{
                res.write(`${pet.nome} não Encontrado`);
            };
            break;
        case "/pets/vacinar":
            res.write(`${petshop.vacinarPet(petshop.pets)} foram vacinados!`);
            break;
        case "/pets/atenderpet":
            petshop.atenderPet( )

        default:
            res.write("tô perdido");
    }

    res.end();
}).listen(3000, "localhost", () => {
    console.log("servidor rodando :)");
});