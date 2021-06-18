 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint=Matter.Constraint
 var engine,world;
 var ball;
 var backgroundImg;

 var ground1;
 var ground2;
 var box1;
 var box2;
 var box3;
 var box4;
 var box5;
 var box6;
 var box7;
 var box8;
 var box9;
 var box10;
 var box11;
 var box12;
 var box13;
 var box14;
 var box15;
 var box16;

 var block1;
 var block2;
 var block3;
 var block4;
 var block5;
 var block6;
 var block7;
 var block8;
 var block9;

 var polygon_img;

 var slingShot;

 var score=0;

 function preload(){
 polygon_img = loadImage("polygon.png")
 getBackgroundImage();
 }

 function setup() {
  createCanvas(1530,715);
  engine =Engine.create()
  world = engine.world
  Engine.run(engine)

 //slingshot = new Sling(polygon.body,{x:200,y:50})


 //polygon = new Ground(250,235,20,20)
  //World.add(world,polygon)

  ground1 = new Ground(600,300,300,10)
  ground2 = new Ground(1100,220,200,10)
  box1 = new Block(500,275,30,40)
  box2 = new Block(530,275,30,40)
  box3 = new Block(560,275,30,40)
  box4 = new Block(590,275,30,40)
  box5 = new Block(620,275,30,40)
  box6 = new Block(650,275,30,40)
  box7 = new Block(680,275,30,40)
  box8 = new Block(530,235,30,40)
  box9 = new Block(560,235,30,40)
  box10 = new Block(590,235,30,40)
  box11 = new Block(620,235,30,40)
  box12 = new Block(650,235,30,40)
  box13 = new Block(560,195,30,40)
  box14 = new Block(590,195,30,40)
  box15 = new Block(620,195,30,40)
  box16 = new Block(590,155,30,40)
  
  block1 = new Block(1030,195,30,40)
  block2 = new Block(1060,195,30,40)
  block3 = new Block(1090,195,30,40)
  block4 = new Block(1120,195,30,40)
  block5 = new Block(1150,195,30,40)
  block6 = new Block(1060,155,30,40)
  block7 = new Block(1090,155,30,40)
  block8 = new Block(1120,155,30,40)

  block9 = new Block(1090,115,30,40)

  ball = Bodies.circle(50,200,20)
  World.add(world,ball);

 slingShot= new Slingshot(this.ball,{x:100,y:200});

 //Engine.run(engine)

 }

 function draw() {
 // background(56,44,44); 
  
  if(backgroundImg){
  background(backgroundImg)
  }

 // Engine.update(engine)
  //rectMode(CENTER)
  //rect(polygon.position.x,polygon.position.y,20,20)
   
 

 ground1.display()
 ground2.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()

 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 // polygon.display()
 imageMode(CENTER)
 image(polygon_img,ball.position.x,ball.position.y,40,40)

 slingShot.display();

 drawSprites();

 
        textSize(20)
        stroke("white")
        fill("red")
        text("Score:"+score,width-300,50)
 }


 function mouseDragged(){
 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }


 function mouseReleased(){
  slingShot.fly();
 }

 function keyPressed(){
     if(keyCode === 32){
         slingShot.attach(this.ball);
     }
 }

 async function getBackgroundImage(){
     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
     if(hour >= 06 && hour<=18){
     bg = "light.jpg"
     }
     else {
         bg = "dark.jpg"
     }
      backgroundImg = loadImage(bg)
 }