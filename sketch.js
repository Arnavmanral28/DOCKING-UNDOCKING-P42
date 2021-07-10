var iss;
var spaceCraft;
var issImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;
var bg;




function preload(){
   bg = loadImage("Docking-undocking/spacebg.jpg")
   spaceCraftImg1 = loadImage("Docking-undocking/spacecraft1.png");
   spaceCraftImg2 = loadImage("Docking-undocking/spacecraft2.png");
   spaceCraftImg3 = loadImage("Docking-undocking/spacecraft3.png");
   spaceCraftImg4 = loadImage("Docking-undocking/spacecraft4.png");
   issImg = loadImage("Docking-undocking/iss.png")
}


function setup() {
  createCanvas(800,800);
  spaceCraft = createSprite(400, 700, 50, 50);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale = 0.3;

  iss = createSprite(400, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 1;

  dock = createSprite(335,331,5,5);
  dock.shapeColor = "red"

  //dock.debug = true;

  //spaceCraft.debug = true;

 

}


function draw() {
  background(bg); 
  
  if(keyIsDown(RIGHT_ARROW)){
    spaceCraft.x +=2
    spaceCraft.addImage(spaceCraftImg4);
    spaceCraft.scale = 0.27
  } 
  if(keyIsDown(LEFT_ARROW)){
    spaceCraft.x -=2
    spaceCraft.addImage(spaceCraftImg3)
    spaceCraft.scale = 0.27
  } 
  if(keyIsDown(UP_ARROW)){
    spaceCraft.y -=2
    spaceCraft.addImage(spaceCraftImg2)
    spaceCraft.scale = 0.27
  } 
  if(keyIsDown(DOWN_ARROW)){
    spaceCraft.y +=2;
  }

  if(spaceCraft.isTouching(dock)){
     textSize(40);
     fill("white")
     text("Docking Succesful!",200,700)
     
  }
  dock.setCollider("circle",0,0,0.1)
  spaceCraft.setCollider("circle",0,0,340)


  dock.visible = false;
  drawSprites();
}