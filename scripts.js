var imgNumber1=Math.ceil(Math.random()*6);
var imgNumber2=Math.ceil(Math.random()*6);
var img1Path="images/dice"+imgNumber1+".png";
var img2Path="images/dice"+imgNumber2+".png";
var winText="Refresh Me";
console.log(imgNumber1);
console.log(imgNumber2);
document.getElementById("player1img").setAttribute("src",img1Path);
document.getElementById("player2img").setAttribute("src",img2Path);
if(imgNumber1>imgNumber2){
  winText="🚩Player 1 Wins!";
}else if(imgNumber1<imgNumber2){
  winText="Player 2 Wins!🚩";
}else{
  winText="Draw😣";
}
document.getElementById("headtext").textContent=winText;
