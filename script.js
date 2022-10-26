const paiDasKills = document.getElementById("listaKills");
const alfaVivos = document.getElementById("alfaNumber");
const bravoVivos = document.getElementById("bravoNumber");
const resultadoJogo = document.getElementById("resposta");
const alfaTeam = document.getElementById("alfaTeam");
const bravoTeam = document.getElementById("bravoTeam");

const equipeAlfa = [
  "Jogador 1",
  "Jogador 2",
  "Jogador 3",
  "Jogador 4",
  "Jogador 5",
  "Jogador 6",
  "Jogador 7",
  "Jogador 8",
  "Jogador 9",
  "Jogador 10",
];
const equipeBravo = [
  "Jogador 1",
  "Jogador 2",
  "Jogador 3",
  "Jogador 4",
  "Jogador 5",
  "Jogador 6",
  "Jogador 7",
  "Jogador 8",
  "Jogador 9",
  "Jogador 10",
];
const alfaVencedor = "Equipe Alfa Venceu";
const bravoVencedor = "Equipe Bravo Venceu";
const fimDeJogo = "A Partida Acabou";

function eliminacao() {
  paiDasKills.innerHTML = "";
  const resultadoKills = document.createElement("li");
  const name = document.createElement("p");

  if (equipeAlfa.length === 0) {
    resultadoJogo.innerText = bravoVencedor;
    name.innerText = fimDeJogo;
  } else if (equipeBravo.length === 0) {
    resultadoJogo.innerText = alfaVencedor;
    name.innerText = fimDeJogo;
  }

  let alfaSorteado = equipeAlfa[Math.floor(Math.random() * equipeAlfa.length)];
  let bravoSorteado =
    equipeBravo[Math.floor(Math.random() * equipeBravo.length)];

  let listaDeKills = [alfaSorteado, bravoSorteado];
  let resultado = listaDeKills[Math.floor(Math.random() * listaDeKills.length)];

  let alfaNeutralizado = `${bravoSorteado} eliminou ${alfaSorteado}`;
  let bravoNeutralizado = `${alfaSorteado} eliminou ${bravoSorteado}`;

  if (resultado === alfaSorteado) {
    if (equipeAlfa.length > 0 && equipeBravo.length > 0) {
      let eliminado = equipeBravo.indexOf(bravoSorteado);
      equipeBravo.splice(eliminado, 1);
      name.innerText = bravoNeutralizado;
      bravoVivos.innerText -= 1;
    }
  } else if (resultado === bravoSorteado) {
    if (equipeAlfa.length > 0 && equipeBravo.length > 0) {
      let eliminado = equipeAlfa.indexOf(alfaSorteado);
      equipeAlfa.splice(eliminado, 1);
      name.innerText = alfaNeutralizado;
      alfaVivos.innerText -= 1;
    }
  }

  resultadoKills.appendChild(name);
  paiDasKills.appendChild(resultadoKills);
}

const resultadoPesquisa = document.getElementById("function");

resultadoPesquisa.addEventListener("click", () => {
  eliminacao();
  console.log(equipeAlfa);
  console.log(equipeBravo);
});
