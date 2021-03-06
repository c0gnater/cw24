class Cannonball{
    constructor(x,y){
        var cannonball_options={
            restitution:0.08,
            friction:1.0,
            density:1.0,
            isStatic:true

        }
        this.r=40
        this.body=Bodies.circle(x,y,this.r,cannonball_options)
        World.add(world,this.body);
        this.image=loadImage("./assets/cannonball.png")
  }
  display(){
      var angle=this.body.angle;
      var pos=this.body.position;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop()
  }
  shoot(){
      var velocity=p5.Vector.fromAngle(cannon.angle)
      velocity.mult(20)
      Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(this.body,{x:50,y:-30})
  }
}