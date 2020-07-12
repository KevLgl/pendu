//alert("Bonjour et bienvenue, vous etes là pour jouer au jeu du pendu")

function game(){
    let life = 7;
    let words = ["voiture", "moto", "velo", "piscine", "maison"];
    let userLetter;
    //Generate a random word from "words"
    const randomWord = words[Math.floor(Math.random() * words.length)];
    //Function for transforms random word into array 
    function stringToArray(str){
        return[...str]
    };
    //Creat userChoiceArray with the previous function 
    let userChoiceArray = (stringToArray(randomWord));
    //Creat the second array with maap, and crypted him
    let userChoiceArrayCrypted = userChoiceArray.map(() => "_" );
    //Ask the user for one letter and check her 
    while(life !=0 || userChoiceArray != userChoiceArrayCrypted){
        userLetter = prompt(`Votre mot a deviner est : ${userChoiceArrayCrypted}\nVeuillez entrer votre lettre` );
        while(userLetter.length >1 ||  isNaN(userLetter === false)){
            userLetter = prompt(`Votre mot a deviner est : ${userChoiceArrayCrypted}\nVeuillez entrer votre lettre` )
        };
        //Check if userLetter is into the random word 
        //If she is into, return the index(s) on userIndexArray
        if(userChoiceArray.includes(userLetter)){
            userChoiceArray.forEach((lettre, index) => {
                if(userLetter === lettre){
                    userChoiceArrayCrypted[index] = userChoiceArray[index]
                    console.log(userChoiceArrayCrypted)
                }
            });
        }
        // If she isn't on the random word, return sentence and loose 1 life point
        else{
            alert(`"${userLetter}" n'est pas dans le mot, desole `);
            life --;
            console.log(`tu as ${life} points de vie`);
        };
    }
}

game();