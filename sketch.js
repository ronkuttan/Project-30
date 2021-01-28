const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1;
var block1,polygon,slingshot;

function preload(){

}

function setup(){
    createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(650,693,1300,20)
    stand1 = new Ground(600,550,380,15)
    stand2 = new Ground(1040,380,280,14)

    polygon = new Polygon(140,430,20)
    
  
    //down stand
    //down part
    block1 = new Block(480,517.3,40,50)
    block2 = new Block(520,517.3,40,50)
    block3 = new Block(560,517.3,40,50)
    block4 = new Block(600,517.3,40,50)
    block5 = new Block(640,517.3,40,50)
    block6 = new Block(680,517.3,40,50)
    block7 = new Block(720,517.3,40,50)
    
    //1st  middle part
    block8 = new Block(520,467.3,40,50)
    block9 = new Block(560,467.3,40,50)
    block10 = new Block(600,467.3,40,50)
    block11 = new Block(640,467.3,40,50)
    block12 = new Block(680,467.3,40,50)

    //2nd middle part
    block13 = new Block(560,417.3,40,50)
    block14 = new Block(600,417.3,40,50)
    block15 = new Block(640,417.3,40,50)

    //top part
    block16 = new Block(600,367.3,40,50)

    //up stand
    //down part
    block17 = new Block(960,347.3,40,50)
    block18 = new Block(1000,347.3,40,50)
    block19 = new Block(1040,347.3,40,50)
    block20 = new Block(1080,347.3,40,50)
    block21 = new Block(1120,347.3,40,50)

    //middle part
    block22 = new Block(1000,297.3,40,50)
    block23 = new Block(1040,297.3,40,50)
    block24 = new Block(1080,297.3,40,50)

    //top part
    block25 = new Block(1040,247.3,40,50)

    
    slingshot = new SlingShot(polygon.body,{x:130,y:400});

}


function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    textSize(23)
    fill("white")
    stroke("yellow")
    textFont("DRAG THE HEXAGONAL STONE AND RELEASE IT TOWARDS THE BLOCKS, TO DESTROY THEM");
    text("DRAG  THE  HEXAGONAL  STONE  AND  RELEASE  IT  TOWARDS  THE  BLOCKS ,  TO  DESTROY  THEM !!",70,60);
    
    textSize(20)
    fill("yellow")
    stroke("white")
    text("Press SPACE to get a second chance to play!!!!!",850,520);

    drawSprites();

    ground.display();
    stand1.display();
    stand2.display();

    polygon.display();
    slingshot.display();

    fill("skyblue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
   

    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("turquoise")
    block13.display();
    block14.display();
    block15.display();

    fill("grey")
    block16.display()
   
    fill("pink")
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("turquoise")
    block22.display();
    block23.display();
    block24.display();

    fill("grey")
    block25.display()
   
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}