// const jogador0 = document.querySelector(".jogador")

// let selected;
// let jogador ="x";

// let posições = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
//   [1,4,7],
//   [2,5,8],
//   [3,6,9],
//   [1,5,9],
//   [3,5,7],
// ];

// function iniciar() {
//   selected = [];

//   jogador.innerHTML =  'É a vez de {$jogador} ';
//   document.querySelectorAll('.game button').forEach((item) =>{
//     item.innerHTML ="";
//     item.addEventListener("click", newMove);

//   });
// }

// iniciar();

// function newMove(e) {
//   const index = e.target.getAttribute("data-i");
//   e.target.innerHTML = jogador;
//   e.target.removeEventListener("click", newMove);
//   selected[index] = jogador;

// setTimeout (()=>{
//   check();
// },[100]);

// jogador = jogador ==="X" ? "O" : "X";
// jogador0.innerHTML = 'É a vez de {$jogador}';
// }

// function check(){
//   let movimento0 = jogador === "X" ? "O" : "X";

// const itens = selected
//   .map((item, i) => [item, i])
//   .filter((item) => item[0] === movimento0)
//   .map((item) => item[1]);

//   for (pos of posições){
//     if (pos.every((item) => itens.includes(item))){
//       alert("O jogador {$jogador0} ganhou");
//       iniciar();
//       return;
//     }
//   }

//   if (selected.filter((item) => item).lenght === 9){
//     alert("Empate");
//     iniciar();
//     return;
//   }
// }

const jogador0 = document.querySelector(".jogador0");

let selected;
let jogador = "X";

let posições = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function iniciar() {
  selected = [];

  jogador0.innerHTML = `É a vez de ${jogador}`;
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

iniciar();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", newMove);
  selected[index] = jogador;

  setTimeout(() => {
    check();
  }, 100);

  jogador = jogador === "X" ? "O" : "X";
  jogador0.innerHTML = `É a vez de ${jogador}`;
}

function check() {
  let movimento0 = jogador === "X" ? "O" : "X";

  const itens = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === movimento0)
    .map((item) => item[1]);

  for (pos of posições) {
    if (pos.every((item) => itens.includes(item))) {
      alert(`O jogador "${movimento0}" ganhou!`);
      iniciar();
      return;
    }
  }

  if (selected.filter((item) => item).length === 8) {
    alert("Empate");
    iniciar();
    return;
  }
}
