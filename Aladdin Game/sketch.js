var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var aladdin, jafar;

var aladdin_img, aladdinrun_img, aladdinmad_img, jafar_img, jafarmad_img, jafarrun_img, redgem_img, yellowgem_img, bluegem_img, purplegem_img, blackgem_img, necklace_img, minus_img, plus_img, tunnel_img, magic_img, cave_img;

function preload(){
  tunnel_img = loadImage("../images/tunnel.jpg");
  aladdin_img = loadImage("../images/Aladdinstart.png");
  aladdinrun_img = loadImage("../images/Aladdinrunning.png");
  aladdinmad_img = loadImage("../images/Aladdinmad.png");
  jafar_img = loadImage("../images/Jafarstart.png");
  jafarrun_img = loadImage("../images/Jafarrunning.png");
  jafarmad_img = loadImage("../images/Jafarmad.png");
  redgem_img = loadImage("../images/Gemred.png");
  yellowgem_img = loadImage("../images/GemYellow.png");
  bluegem_img = loadImage("../images/Gemblue.png");
  purplegem_img = loadImage("../images/Gempurple.png");
  blackgem_img = loadImage("../images/Gemblack.png");
  necklace_img = loadImage("../images/Necklace.png");
  minus_img = loadImage("../images/-2.png");
  plus_img = loadImage("../images/+2.png");
  cave_img = loadImage("../images/cave.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
