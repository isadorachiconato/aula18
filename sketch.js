let maximo = width;
let minimo = 1;
let quantidade = map(mouseX, 0, maximo, minimo, palavra.length);
let parcial = palavra.substring(0, quantidade);
text(parcial, 200, 200);
function setup() {
  createCanvas(400, 400);
}
  

function draw() {
  background(220);
  fill("black");
  
  textSize(64);
  textAlign(CENTER, CENTER);                                                                       
  let palavra = "Caminhante";
  text(palavra, 200,200);
}

if(mouseX < 50){
let palavra = "C";
  text(palavra, 200, 200);
} else if(mouseX < 100) {
  let palavra = "Ca";
  text(palavra, 200,200);
} else {
  let palavra = "Caminhante";
  text(palavra,200, 200);
}