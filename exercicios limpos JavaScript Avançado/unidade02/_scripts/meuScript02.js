// **** Opção 1 ****
var meuElemento = document.querySelector("#opcoesPizza");
var novaPizza = document.createElement("li");

// Adicionar novo item list
meuElemento.appendChild(novaPizza);

// Atribuir valorao item list
novaPizza.innerHTML = "Quatro Queijos";

// **** Opção 2 ****
meuElemento.appendChild(document.createElement("li")).innerHTML = "Camarão";
meuElemento.appendChild(document.createElement("li")).innerHTML = "Presunto";
meuElemento.appendChild(document.createElement("li")).innerHTML = "Vegana";

// **** Opção 3 ****
document.querySelector("#opcoesPizza").appendChild(document.createElement("li")).innerHTML = "Camarão";