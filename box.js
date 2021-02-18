class Box {
  constructor(x, y, width, height) {   
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'isStatic': true
    }
    this.pinImg = loadImage("pin.png")
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.pinImg,0, 0, this.width, this.height);
    pop();
  }
};
