

let listaAmigos = [];

function adicionarAmigo(){
    
    const inputElement = document.getElementById("amigo");
    
    if(inputElement.value == ""){
        alert("Insira um nome válido corno!");
    }else{
        const valorDoInput = inputElement.value.trim(); 
        listaAmigos.push(valorDoInput); 
        inputElement.value = "";
        atualizarListaNaTela();
    }
    
}

function atualizarListaNaTela(){
    const friendsList = document.getElementById("listaAmigos");
    friendsList.innerHTML = "";
    for (const amigo of listaAmigos) {
        const listItem = document.createElement("li"); 
        listItem.textContent = amigo; 
        friendsList.appendChild(listItem); 
    }
}
    



function sortearAmigo(){
    const drawButton = document.getElementsByClassName("button-draw")
    if(listaAmigos.length === 0){
        alert("Insira nomes");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    const resultadoElement = document.getElementById("resultado"); // seleciona o ul
    resultadoElement.innerHTML = "" // Limpa o resultado anterior
    const listItem = document.createElement("li");
    listItem.textContent =  `Amigo sorteado: ${amigoSorteado}` // cria o elemento li com o amigo sorteado
    resultadoElement.appendChild(listItem); // adiciona o li ao resultado


}
