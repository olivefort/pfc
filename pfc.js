


//var tabDiv = [pierre, feuille, ciseaux];

var pierre = document.getElementById('pierre');
var feuille= document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');

pierre.addEventListener('click',choix);
feuille.addEventListener('click',choix);
ciseaux.addEventListener('click',choix);

var bouton = document.getElementById('rejouer');
bouton.style.display = 'none';
bouton.addEventListener('click',refresh);

var result = document.getElementById('resultat');
var score = document.getElementById('score');
var final = document.getElementById('final');

var score1 = 0;
var score2 = 0;

var sonwin = new Audio('win.wav');
var sonlose = new Audio ('lose.wav');

function choix(valor){
    var pfc = ['la pierre',' la feuille','les ciseaux'];
    var rdm = (Math.floor(Math.random() * 3))
    console.log(rdm);
    var ia = pfc[rdm];
    console.log(ia);
    var tar = valor.target.className;
    //if(valor.target == pierre){
      //  tar.innerHTML = "la pierre"
    //}
    console.log('vous avez choisi '+tar)
    var val = this.getAttribute('value');
    console.log(val);
    var egal = (rdm == val);
    var win = (rdm == 0 && val == 1 || rdm == 1 && val == 2 || rdm == 2 && val == 0)
    //var lose = (rdm == 1 && val == 0 || rdm == 0 && val == 2 || rdm == 2 && val == 1)
    if (egal){
        var text = "égalité";
    }else if(win){
        var text = "vous avez gagné";
        score1++
    }else{
        var text = "vous avez perdu";
        score2++
    }
    var result = document.getElementById('resultat');
    result.innerHTML = "Vous : " + tar + " - IA :  " + ia ;
    var score = document.getElementById('score');
    score.innerHTML = "Score : " +score1+ " - " +score2
    var final = document.getElementById('final');
    if(score1 == 3){
        final.innerHTML = "VOUS AVEZ GAGNE LA PARTIE"
        bouton.style.display = 'block'
        pierre.removeEventListener('click',choix);
        feuille.removeEventListener('click',choix);
        ciseaux.removeEventListener('click',choix);
        sonwin.play();
        
    }else if(score2 == 3){
        final.innerHTML = "VOUS AVEZ PERDU LA PARTIE"
        bouton.style.display = 'block'
        pierre.removeEventListener('click',choix);
        feuille.removeEventListener('click',choix);
        ciseaux.removeEventListener('click',choix);
        sonlose.play();
    }
}

function refresh(){
    final.innerHTML = '';
    score.innerHTML = '';
    result.innerHTML = '';
    bouton.style.display = 'none'
    pierre.addEventListener('click',choix);
    feuille.addEventListener('click',choix);
    ciseaux.addEventListener('click',choix);
    score1 = 0;
    score2 = 0;
}


/*
var son = [
    {'name':'win','sound':'win.wav'},
    {'name':'lose','sound':'lose.wav'},
];

function playSound (){
   var playson = new Audio 
}
*/