class Ball {
    constructor(x, y,radius) {
      var options = {
          'friction':1.0,
          'density':1.0,
          'isStatic':false
      }
      this.ballImg = loadImage("ball.png")
      this.body = Bodies.circle(x, y,radius/2,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      image(this.ballImg,0, 0, this.radius,this.radius);
      pop();
    }
  };
  