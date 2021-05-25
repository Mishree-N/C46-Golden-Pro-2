//constants
const gameWidth =  800;
const gameHeight =  600;
const mazeColor = "black";
const START=0, PLAY=1, END=2;
const SQUIRRELMOVE=5;
const MAXLIVES = 3

//variables
var squirrel, squirrelImg;
var snake, snakeImg;
var nutImg, gnutImg;
var n1,n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20, n21, n22, n23, n24, n25,
n26, n27, n28, n29, n30, n31, n32, n33, n34, n35;
var gn1, gn2, gn3, gn4, gn5;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25,
m26, m27;
var edges;
var bgImg;
var gameState=START;
var story;
var randNum;
var score=0, lives=MAXLIVES;
var nutGroup, gnutGroup;


function preload(){

  //load squirrel image
  squirrelImg=loadImage("assets/images/Squirrel.png");

  //load snake image
  snakeImg=loadImage("assets/images/snake2.png")

  //load nuts images
  nutImg=loadImage("assets/images/nut.png");
  gnutImg=loadImage("assets/images/gnut.png");

  //load bg image
  bgImg=loadImage("assets/images/bg1.png");

}


function setup() {
  createCanvas(gameWidth,gameHeight);

  //create snake and add image
  snake=createSprite(75,577,10,10);
  snake.addImage(snakeImg);
  snake.scale=.35;  

  //call create maze
  createMaze();

  //create group for golden and normal nuts
  nutGroup=new Group();
  gnutGroup=new Group();

  //call create nuts
  createNuts();
  //call create golden nuts
  createGoldenNuts();

  //create squirrel sprite and add image
  squirrel=createSprite(760,35,10,10);
  squirrel.addImage(squirrelImg);
  squirrel.scale=0.035;

  //create sprite for screen to display story and rules
  //story=createSprite(gameWidth/2,gameHeight/2,gameWidth,gameHeight);
  //story.shapeColor="gray";

}

function draw() {
  background(bgImg);  
  var edges=createEdgeSprites();

  //call snake mvoement function to make snake move
  snakeMovement();

  //when s key is pressed start game
  if(keyDown("S")){
    startGame();
  }

  //let squirrel move using arrow key controls
  if(keyDown("UP_ARROW")){
    squirrel.y = squirrel.y-SQUIRRELMOVE;
  }
  if(keyDown("DOWN_ARROW")){
    squirrel.y=squirrel.y+SQUIRRELMOVE;
  }
  if(keyDown("LEFT_ARROW")){
    squirrel.x=squirrel.x-SQUIRRELMOVE;
    //squirrel.mirrorX(squirrel.mirrorX() * -1);  
  }
  if(keyDown("RIGHT_ARROW")){
    squirrel.x=squirrel.x+SQUIRRELMOVE;
    //squirrel.mirrorX(squirrel.mirrorX() * -1);  
  }

  //make squirrel collide against all walls of the maze and edges 
  squirrel.collide (m1);
  squirrel.collide (m2);
  squirrel.collide (m3);
  squirrel.collide (m4);
  squirrel.collide (m5);
  squirrel.collide (m6);
  squirrel.collide (m7);
  squirrel.collide (m8);
  squirrel.collide (m9);
  squirrel.collide (m10);
  squirrel.collide (m11);
  squirrel.collide (m12);
  squirrel.collide (m13);
  squirrel.collide (m14);
  squirrel.collide (m15);
  squirrel.collide (m16);
  squirrel.collide (m17);
  squirrel.collide (m18);
  squirrel.collide (m19);
  squirrel.collide (m20);
  squirrel.collide (m21);
  squirrel.collide (m22);
  squirrel.collide (m23);
  squirrel.collide (m24);
  squirrel.collide (m25);
  squirrel.collide (m26);
  squirrel.collide (m27);
  squirrel.collide(edges);

  //make snake collide against all walls of the maze and edges 
  snake.bounceOff (m1);
  snake.bounceOff (m2);
  snake.bounceOff (m3);
  snake.bounceOff (m4);
  snake.bounceOff (m5);
  snake.bounceOff (m6);
  snake.bounceOff (m7);
  snake.bounceOff (m8);
  snake.bounceOff (m9);
  snake.bounceOff (m10);
  snake.bounceOff (m11);
  snake.bounceOff (m12);
  snake.bounceOff (m13);
  snake.bounceOff (m14);
  snake.bounceOff (m15);
  snake.bounceOff (m16);
  snake.bounceOff (m17);
  snake.bounceOff (m18);
  snake.bounceOff (m19);
  snake.bounceOff (m20);
  snake.bounceOff (m21);
  snake.bounceOff (m22);
  snake.bounceOff (m23);
  snake.bounceOff (m24);
  snake.bounceOff (m25);
  snake.bounceOff (m26);
  snake.bounceOff (m27);
  snake.bounceOff(edges);

  //if squirrel touches any nut, incrmement score by 1
  if (squirrel.isTouching(nutGroup) || squirrel.isTouching(gnutGroup)){

    score++;

  }

  console.log(score);

  //show all sprites
  drawSprites();

}


function createMaze(){

    //create all 27 maze pieces
    m1=createSprite(350,230,7,180);
    m1.shapeColor=mazeColor;
    m2=createSprite(350,140,90,7);
    m2.shapeColor=mazeColor;
    m3=createSprite(70,550,170,7);
    m3.shapeColor="gray";
    m4=createSprite(155,575,7,57);
    m4.shapeColor="gray";
    m5=createSprite(775,75,110,7);
    m5.shapeColor="gray";
    m6=createSprite(720,38.5,7,80);
    m6.shapeColor="gray";
    m7=createSprite(290,210,120,7);
    m7.shapeColor=mazeColor;
    m8=createSprite(80,25,7,75);
    m8.shapeColor=mazeColor;
    m9=createSprite(20,345,380,7);
    m9.shapeColor=mazeColor;
    m10=createSprite(80,345,7,105);
    m10.shapeColor=mazeColor;
    m11=createSprite(250,470,145,7);
    m11.shapeColor=mazeColor;
    m12=createSprite(250,480,7,85);
    m12.shapeColor=mazeColor;
    m13=createSprite(120,175,7,85);
    m13.shapeColor=mazeColor;
    m14=createSprite(90,155,120,7);
    m14.shapeColor=mazeColor;
    m15=createSprite(550,150,7,305);
    m15.shapeColor=mazeColor;
    m16=createSprite(550,80,150,7);
    m16.shapeColor=mazeColor;
    m17=createSprite(450,350,7,200);
    m17.shapeColor=mazeColor;
    m18=createSprite(480,400,250,7);
    m18.shapeColor=mazeColor;
    m19=createSprite(780,200,270,7);
    m19.shapeColor=mazeColor;
    m20=createSprite(700,200,7,105);
    m20.shapeColor=mazeColor;
    m21=createSprite(670,330,70,7);
    m21.shapeColor=mazeColor;
    m22=createSprite(650,550,105,7);
    m22.shapeColor=mazeColor;
    m23=createSprite(700,500,7,105);
    m23.shapeColor=mazeColor;
    m24=createSprite(580,480,60,7);
    m24.shapeColor=mazeColor;
    m25=createSprite(400,565,7,75);
    m25.shapeColor=mazeColor;
    m26=createSprite(240,50,7,50);
    m26.shapeColor=mazeColor;
    m27=createSprite(240,50,50,7);
    m27.shapeColor=mazeColor;

}

function createNuts(){

  //create all 35 nuts
  n1=createSprite(590,40,10,10);
  n1.addImage(nutImg);
  n1.scale=0.06;
  n2=createSprite(670,115,10,10);
  n2.addImage(nutImg);
  n2.scale=0.06;
  n3=createSprite(600,175,10,10);
  n3.addImage(nutImg);
  n3.scale=0.06;
  n4=createSprite(750,125,10,10);
  n4.addImage(nutImg);
  n4.scale=0.06;
  n5=createSprite(750,175,10,10);
  n5.addImage(nutImg);
  n5.scale=0.06;
  n6=createSprite(600,250,10,10);
  n6.addImage(nutImg);
  n6.scale=0.06;
  n7=createSprite(600,350,10,10);
  n7.addImage(nutImg);
  n7.scale=0.06;
  n8=createSprite(700,400,10,10);
  n8.addImage(nutImg);
  n8.scale=0.06;
  n9=createSprite(750,330,10,10);
  n9.addImage(nutImg);
  n9.scale=0.06;
  n10=createSprite(670,520,10,10);
  n10.addImage(nutImg);
  n10.scale=0.06;
  n10=createSprite(500,430,10,10);
  n10.addImage(nutImg);
  n10.scale=0.06;
  n11=createSprite(550,570,10,10);
  n11.addImage(nutImg);
  n11.scale=0.06;
  n12=createSprite(450,520,10,10);
  n12.addImage(nutImg);
  n12.scale=0.06;
  n13=createSprite(380,450,10,10);
  n13.addImage(nutImg);
  n13.scale=0.06;
  n14=createSprite(280,500,10,10);
  n14.addImage(nutImg);
  n14.scale=0.06;
  n15=createSprite(350,570,10,10);
  n15.addImage(nutImg);
  n15.scale=0.06;
  n16=createSprite(180,510,10,10);
  n16.addImage(nutImg);
  n16.scale=0.06;
  n17=createSprite(50,490,10,10);
  n17.addImage(nutImg);
  n17.scale=0.06;
  n18=createSprite(30,390,10,10);
  n18.addImage(nutImg);
  n18.scale=0.06;
  n19=createSprite(180,390,10,10);
  n19.addImage(nutImg);
  n19.scale=0.06;
  n20=createSprite(300,350,10,10);
  n20.addImage(nutImg);
  n20.scale=0.06;
  n21=createSprite(150,305,10,10);
  n21.addImage(nutImg);
  n21.scale=0.06;
  n22=createSprite(670,520,10,10);
  n22.addImage(nutImg);
  n22.scale=0.06;
  n23=createSprite(80,120,10,10);
  n23.addImage(nutImg);
  n23.scale=0.06;
  n24=createSprite(320,240,10,10);
  n24.addImage(nutImg);
  n24.scale=0.06;
  n25=createSprite(400,290,10,10);
  n25.addImage(nutImg);
  n25.scale=0.06;
  n26=createSprite(450,200,10,10);
  n26.addImage(nutImg);
  n26.scale=0.06;
  n27=createSprite(500,320,10,10);
  n27.addImage(nutImg);
  n27.scale=0.06;
  n28=createSprite(520,120,10,10);
  n28.addImage(nutImg);
  n28.scale=0.06;
  n29=createSprite(400,90,10,10);
  n29.addImage(nutImg);
  n29.scale=0.06;
  n30=createSprite(300,30,10,10);
  n30.addImage(nutImg);
  n30.scale=0.06;
  n31=createSprite(230,150,10,10);
  n31.addImage(nutImg);
  n31.scale=0.06;
  n32=createSprite(170,40,10,10);
  n32.addImage(nutImg);
  n32.scale=0.06;
  n33=createSprite(30,30,10,10);
  n33.addImage(nutImg);
  n33.scale=0.06;
  n34=createSprite(90,180,10,10);
  n34.addImage(nutImg);
  n34.scale=0.06;
  n35=createSprite(220,260,10,10);
  n35.addImage(nutImg);
  n35.scale=0.06;

  //add all nuts to the nut group
  nutGroup.add(n1);
  nutGroup.add(n2);
  nutGroup.add(n3);
  nutGroup.add(n4);
  nutGroup.add(n5);
  nutGroup.add(n6);
  nutGroup.add(n7);
  nutGroup.add(n8);
  nutGroup.add(n9);
  nutGroup.add(n10);
  nutGroup.add(n11);
  nutGroup.add(n12);
  nutGroup.add(n13);
  nutGroup.add(n14);
  nutGroup.add(n15);
  nutGroup.add(n16);
  nutGroup.add(n17);
  nutGroup.add(n18);
  nutGroup.add(n19);
  nutGroup.add(n20);
  nutGroup.add(n21);
  nutGroup.add(n22);
  nutGroup.add(n23);
  nutGroup.add(n24);
  nutGroup.add(n25);
  nutGroup.add(n26);
  nutGroup.add(n27);
  nutGroup.add(n28);
  nutGroup.add(n29);
  nutGroup.add(n30);
  nutGroup.add(n31);
  nutGroup.add(n32);
  nutGroup.add(n33);
  nutGroup.add(n34);
  nutGroup.add(n35);
  
}

function createGoldenNuts(){

  //create all 5 golden nuts
  gn1=createSprite(730,230,10,10);
  gn1.addImage(gnutImg);
  gn1.scale=0.023;
  gn2=createSprite(720,575,10,10);
  gn2.addImage(gnutImg);
  gn2.scale=0.023;
  gn3=createSprite(50,320,10,10);
  gn3.addImage(gnutImg);
  gn3.scale=0.023;
  gn4=createSprite(530,50,10,10);
  gn4.addImage(gnutImg);
  gn4.scale=0.023;
  gn5=createSprite(200,580,10,10);
  gn5.addImage(gnutImg);
  gn5.scale=0.023;

  gnutGroup.add(gn1);
  gnutGroup.add(gn2);
  gnutGroup.add(gn3);
  gnutGroup.add(gn4);
  gnutGroup.add(gn5);


}


function startGame(){

  //remove barriers 
  m3.remove();
  m4.remove();
  m5.remove();
  m6.remove();
  //story.remove();

  // play game
  gameState=PLAY;

}

function displayStory(){

  //function to display story and rules of game
  fill("black");
  text("story of game", 300,200);
  text("rules of game", 300,400);

}

function snakeMovement(){

  if (frameCount%150==0){

    //assign random number movements
    randNum=round(random(1,4));

    //switch case
    switch (randNum){

      //let snake move left
      case 1 : snake.velocityX=-3; snake.velocityY=1; 
      break;

      //let snake move right
      case 2 : snake.velocityX=3; snake.velocityY=1;
      break;

      //let snake move down
      case 3 : snake.velocityY=3; snake.velocityX=1;
      break;

      //let snake move up
      case 4 : snake.velocityY=-3; snake.velocityX=1;
      break;

      default : break ;

    }
}


}