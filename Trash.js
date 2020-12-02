class Trash {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:true,
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("trash-bin-clipart-3.jpg")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };