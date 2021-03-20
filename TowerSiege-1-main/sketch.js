const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var ground, stand1, stand2, block1, block2, block3, block4, block5, block6, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon_img, slingShot, ball;

function preload(){
polygon_img = loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1= new Ground(380,300, 270,15);
    stand2 = new Ground(700, 200, 200,15);

    //set1
    //level1
    block1 = new Box(280,275,30,40);
    block2 = new Box(310,275,30,40);
    block3 = new Box(340,275,30,40);
    block4 = new Box(370,275,30,40);
    block5 = new Box(400,275,30,40);
    block6 = new Box(430,275,30,40);
    block7 = new Box(460,275,30,40);
    block8 = new Box(490,275,30,40);

    //level2
    block9 = new Box(310,235,30,40);
    block10 = new Box(340,235,30,40);
    block11 = new Box(370,235,30,40);
    block12 = new Box(400,235,30,40);
    block13 = new Box(430,235,30,40);
    block14 = new Box(460,235,30,40);

    //level3
    block15 = new Box(340,195,30,40);
    block16 = new Box(370,195,30,40);
    block17 = new Box(400,195,30,40);
    block18 = new Box(430,195,30,40);

    //level4
    block19 = new Box(370,155,30,40);
    block20 = new Box(400,155,30,40);

    //level5
    block21 = new Box(380,115,30,40);

    //set two
    //level one
    blocks1 = new Box(640,175,30,40);
    blocks2 = new Box(670,175,30,40);
    blocks3 = new Box(700,175,30,40);
    blocks4 = new Box(730,175,30,40);
    blocks5 = new Box(760,175,30,40);

    //level two
    blocks6 = new Box(670,135,30,40);
    blocks7 = new Box(700,135,30,40);
    blocks8 = new Box(730,135,30,40);

    //level three
    blocks9 = new Box(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:130,y:200});

    

}

function draw(){
    background("grey");
    Engine.update(engine);

    

    ground.display();
    stand1.display();
    stand2.display();

    stroke(15);
    fill(0,247,247);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    stroke(15);
    fill(247,87,147);
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    stroke(15);
    fill(247,100,2);
    block15.display();
    block16.display();
    block17.display();
    block18.display();  
    
    stroke(15);
    fill(247,209,0);
    block19.display(); 
    block20.display(); 

    stroke(15);
    fill(174,174,174);
    block21.display();

    //set two
    //level one
    stroke(15);
    fill(241,41,36);
    blocks5.display();
    blocks4.display();
    blocks3.display();
    blocks2.display();
    blocks1.display();

    //level two
    stroke(15);
    fill(175,245,13);
    blocks6.display();
    blocks7.display();
    blocks8.display();

    //level three
    stroke(15);
    fill(240,200,140);
    blocks9.display();  
    
    text("Drag the ball and release to hit the boxes",600,250)
    
    imageMode(CENTER);
    image(polygon_img,ball.position.x,ball.position.y,40,40);
    //ellipseMode(RADUIUS);
    ellipse(ball.position.x, ball.position.y,20);
    slingShot.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
    }

    function mouseReleased(){
        slingShot.fly();
    }


    