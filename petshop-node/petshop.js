let pets = [{nome: "doug"}];

const listarPet = () => {
    let conteudo = "";
    for (let pet of pets){
        conteudo+= `
        -------------
        Nome: ${pet.nome}
        -------------`;
    }
    return conteudo;
    };

    const adicionarPet = novoPet => {
        return pets.push(novoPet);
    }

    const buscarPet = (novoPet) => {
        return (pets.filter(Pets => Pets.nome === novoPet.nome).length > 0)
        
    }

    module.exports = {listarPet, adicionarPet, buscarPet};