Constructor(body1,body2,offsetX,offsetY)

this.offsetX = offsetX
this.offsetY = offsetY
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetY,y:this.offsetX}
}
this.rope=Constraint.create(options)
World.add(world,this.rope)

rope1 = new rope(bobObject1.body,roofObject.body,bobDiameter*2,0)

display()

var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeweight(2);

var Anchor1x=pointA.x
var Anchor1y=pointA.y

var Anchor2x=pointB.x+this.offsetX
var Anchor2y=pointB.y+this.offsetY

line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);