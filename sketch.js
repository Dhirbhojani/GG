const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
const Constraint=Matter.Constraint;


function setup(){
    var canvas = createCanvas(700,1800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,100);
    box2 = new Box(400,200,50,100);
    box3 = new Box(340,250,50,100);
    box4= new Box(350,150,50,100);
    box5 = new Box(500,190,50,100);
    box6 = new Box(400,100,50,100);
    box7= new Box(460,250,50,100);
   
   ball = new Ball(400,600,250,50)
   rope = new Rope(ball.body,{x:400,y:500})
    ground = new Ground(600,height,1200,20) 
}

function draw(){
    background("white");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    box1.display();
   box2.display();
   box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ground.display();
    ball.display();
    //rope.display();
    detectollision(ball,box1);
    detectollision(ball,box2);
    detectollision(ball,box3);
    detectollision(ball,box4);
    detectollision(ball,box5);
    detectollision(ball,box5);
    detectollision(ball,box6);
    detectollision(ball,box7);

    
}
function mouseDragged (){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
    
    
    }
function mouseReleased()
{
rope.fly();
//Matter.Body.setStatic(ball.body,true)

}
function detectollision(ball,pin){
pinBodyPosition=pin.body.position;
ballBodyPosition=ball.body.position;

var distance=dist(ballBodyPosition.x, ballBodyPosition.y, pinBodyPosition.x, pinBodyPosition.y)
if(distance<=pin.height+ball.radius)
{
    Matter.Body.setStatic(pin.body,false);
}


}
