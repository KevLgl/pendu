//alert("Bonjour et bienvenue, vous etes là pour jouer au jeu du pendu")

function game(){
let words = ["voiture", "moto", "velo", "piscine", "maison"]
const randomWord = words[Math.floor(Math.random() * words.length)];

console.log("random month =>", randomWord);

}
game ()