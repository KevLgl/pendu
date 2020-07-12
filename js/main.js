//alert("Bonjour et bienvenue, vous etes là pour jouer au jeu du pendu")

function game(){
    let life = 7;
    let words = ["voiture", "moto", "velo", "piscine", "maison"];
    let userLetter;
    let userArray = [];
    let userIndexArray = [];
    let index 
    //Generate a random word from "words"
    const randomWord = words[Math.floor(Math.random() * words.length)];
    //Function for transforms random word into array 
    function stringToArray(str){
        return[...str]
    };
    //Creat userChoiceArray with the previous function 
    let userChoiceArray = (stringToArray(randomWord));
    //Creat the second array with maap, and crypted him
    let userChoiceArrayCrypted = userChoiceArray.map(el => "_" );
    //Ask the user for one letter and check her 
    userLetter = prompt(`Votre mot a deviner est : ${userChoiceArrayCrypted}\nVeuillez entrer votre lettre` );
    while(userLetter.length >1 ||  isNaN(userLetter === false)){
        userLetter = prompt(`Votre mot a deviner est : ${userChoiceArrayCrypted}\nVeuillez entrer votre lettre` )
    };
    //Check if userLetter is into the random word 
    //If she is into, return the index(s)  
    if(userChoiceArray.includes(userLetter)){
        alert(`Bravo tu as trouvé la lettre ${userLetter}`);
        index = userChoiceArray.indexOf(userLetter)
        while(index!= -1){
            userIndexArray.push(index)
            index = userChoiceArray.indexOf(userLetter, index +1)
        }
        
        console.log(userIndexArray)
    }
    else{
        alert(`"${userLetter}" n'est pas dans le mot, desole `);
        life --;
        console.log(`tu as ${life} points de vie`);
    };


    
    
    












 
  //  Je te donne pas la réponse par exemple 😛 je te guide pour que tu trouve la réponse toi-même ça te va?

    // const mot = 'coordonées';
    // const motCrypte = [...mot].map(() => '_');
    // const lettreTapeeParLutilisateur = 'o';
    // let indiceDebutRecherche = 0;
    // do {
    //     indiceDebutRecherche = mot.indexOf(lettreTapeeParLutilisateur, indiceDebutRecherche);
    //     if (indiceDebutRecherche > -1) {
    //         motCrypte[indiceDebutRecherche] = lettreTapeeParLutilisateur;
    //         indiceDebutRecherche++;
    //     }
    // } while (indiceDebutRecherche > -1);
    // console.log(motCrypte.join(''));


    // if(userChoiceArray.includes(userLetter)){
    //     userArray.push(userLetter)
    // }




   
    

    


}

   
















game();