class Block{
    constructor(x, y, width, height) {
      this.remove=true;
        var options = {
            'restitution':0.4,
            'friction':0
           // 'density':1.0
        }
        this.visibility=225
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");s
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body)
          if(this.remove == true){
            score = score +50
            this.remove=false
          }
          
          push()
          this.visibility=this.visibility-5
          pop()
        }
      }
}