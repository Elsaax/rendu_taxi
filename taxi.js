"use strict";

// création d'une classe personne anec un nom et des point de vie
class Person {
    constructor(name,hp){
        this.name = name;
        this.hp = hp;
    }
}

// fonction qui renvoie un nbr entier de 0 a max
//( si max= = 1 la fonction renvoie 0, si max = 4 la fonction renvoie soit 0, 1, 2 ou 3)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// fonction qui de manière random va choisir une musique de la plalist(type:list)
// renvoie une des chanson de la liste en string
function music(playlist){
    let randomMusic =getRandomInt(5);
    return playlist[randomMusic]
}

// création de la liste de musique (5)
let playlist = ["Anissa", "Moonlight", "CHXSE", "Swim", "Gravity"];
// création d'une var count qui va compté pat combien de feux rouge John est passé
let count = 0;
// création d'une var taxi qui va compté combien de taxi John a emprunté
let taxi = 1;
// création du personnage John
let john = new Person("John",10);


/*
Boucle "for" de 30 instances pour les 30 feux de signalisation
3 possiblités:
    les pv de John on atteind 0 > on sort de la boucle "for"
    la musique jouée dans le taxi est Anissa > John change de taxi et perd 1 pv
    la musique jouée dans le taxi n'est pas Anissa > John continu dans le même taxi
*/
for (let i = 0; i < 30; i++){ 
    let musiqueJoue = music(playlist); // sauvegarde la musique joué pour chaque instance de la boucle
    if (john.hp == 0){ // avant tout vérifie que John soit toujours en vie
        console.log("La santé mentale de " + john.name + " a atteind 0, EXPLOSION!!");
        console.log(john.name + " a parcouru " + count + " feux");
        i = 30; // permet de sortir de la boucle "for"
    } else if (musiqueJoue == "Anissa"){ // vérifie si la musique Anissa est jouée
        console.log("La musique jouée est Anissa. John change de taxi.");
        count += 1; // +1 au nbr de feux de signalisation passés
        taxi += 1; //John prend un nouveau taxi
        john.hp -= 1; // John perd un point de vie
        console.log(john.name + " a " + john.hp + "  points de vie et est passé devant " + count + " feux.");
    } else { // la derniere possibilité est si une autre musique de la playlist est jouée
        count += 1; // +1 au nbr de feux de signalisation passés
        console.log("La musique jouée est  " + musiqueJoue);   
    }  
}
// annonce  uniquement si John a su rentré chez lui en vie
if (john.hp > 0){
    console.log(john.name + " est bien arrivé ches lui est a dut emprunté " + taxi + " taxis.");
}

