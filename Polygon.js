class Polygon {
    constructor(x, y,r) {
        var options = {
            'isStatic': false,
            'restitution':0,
            'friction':0.9,
            'density':1.0
        }
     
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.x = x;
      this.y = y;
      
      this.image  = loadImage("polygon.png")
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0, 0, 50,50);
      pop();
    }
  };