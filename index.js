var randomnum1=Math.floor(Math.random()*6)+1 ;
var randomdicenumber="dice"+randomnum1+".png";
var randomimagesource="images/"+randomdicenumber;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2 = Math.floor(Math.random() * 6 )+ 1 ;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomnum1>randomNumber2) {
    document.querySelector("h1").innerHTML="player1wins";
}
else if(randomnum1<randomNumber2){
    document.querySelector("h1").innerHTML="player2wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
 /*
if (randomnum1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
} else if (randomnum1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
} else { 
    document.querySelector("h1").innerHTML="It's a Draw!";
}
Footer*/