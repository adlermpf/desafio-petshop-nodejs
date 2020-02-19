const PETSHOP = "Petshop DH";

let pets = [{
    nome: "Dutch",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 5,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "German",
    tipo: "Cão",
    raca: "Pastor",
    idade: 3,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "English",
    tipo: "Cão",
    raca: "Bulldog",
    idade: 10,
    genero: "Macho",
    servicos: [],
    vacinado: false
}, {
    nome: "Brazilian",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 1,
    genero: "Macho",
    servicos: [],
    vacinado: false
}];

const listarPet = () => {
    let conteudo = "";
    for (let pet of pets){
        conteudo+= `
        -------------
        Nome: ${pet.nome}
        
        Tipo: ${pet.tipo}
        
        Raça: ${pet.raca}
        
        Idade: ${pet.idade}
        
        Gênero: ${pet.genero}
        
        Serviços: ${pet.servicos}
        
        Vacinado: ${pet.vacinado?"SIM":"NÃO"}
        -------------`;
    }
    return conteudo;
    };

    const validarDados = dadosPet => {
        return (
            dadosPet.nome &&
            dadosPet.idade &&
            dadosPet.genero &&
            dadosPet.tipo &&
            dadosPet.raca
        );
    };
    
    const adicionarPet = novoPet => {
        if (typeof novoPet == "object" && validarDados(novoPet)) {
            pets.push(novoPet);
            novoPet.nome = novoPet.nome.toString();
            novoPet.idade = parseInt(novoPet.idade);
            if (!novoPet.servicos) {
                novoPet.servicos = [];
            }
            return true;
        } else {
            return false;
        }
    };

    const buscarPet = (novoPet) => {
        return (pets.filter(Pets => Pets.nome === novoPet.nome).length > 0)
        
    }

    const vacinarPet = () => {
        let petsVacinados = [];
        pets.forEach(pet => {
            if (!pet.vacinado) {
                pet.vacinado = true;
                petsVacinados.push(pet.nome);
            }
        });
        return petsVacinados.join(", ");
    }

    const tosarPet = pet => {
        pet.servicos.push("tosa");
        console.log("Tosa realizada com sucesso");
    }
    
    const darBanhoPet = pet => {
        pet.servicos.push("banho");
        console.log("Banho realizada com sucesso");
    }
    
    const cortarUnhasPet = pet => {
        pet.servicos.push("Unha");
        console.log("Unhas cortadas!");
    }

    const buscarPetPeloNome = (nome) => {
        if(pets.filter(oPet => oPet.nome === nome)){
            return pets.findIndex(oPet => oPet.nome === nome);
        }else{
             console.log(`${nome} não cadastrado.`);
        }
    }
    
    
    const atenderPet = (nome, ...servicos) => {
        console.log(`Bem vindo, ${nome}`);
        if(pets.filter(oPet => oPet.nome === nome).length > 0){
            let indice = buscarPetPeloNome(nome);
            for (let servico of servicos) {
                servico(pets[indice]);
            }
        } else {
            console.log("Não foi posivel realizar os serviços o pet não está cadastrado")
        }
    }
    
    const pagar = () => {
        console.log("Pagamento realizado com sucesso");
    }

    module.exports = {listarPet, adicionarPet, buscarPet, PETSHOP, vacinarPet, pets, atenderPet};