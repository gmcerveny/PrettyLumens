var Attractor = function() {
  this.position = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 1;

  this.calculateAttraction = function(p) {
    var force = p5.Vector.sub(this.position, p.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
}