function Particle(x, y, m) {
  var lightColor = color(220, 242, 249);
  var whiteColor = color(255);

  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = m;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function() {
    fill(lightColor)
    stroke(whiteColor)
    strokeWeight(2)
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  this.checkEdges = function() {
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1.0;
      this.position.y = constrain(this.position.y, 1, height-1);
    }
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = constrain(this.position.x, 1, width-1);
    }
  }
}

function Log() {
  var orange = color(237,129,23);
  this.x = 5
  this.y = height - 24
  this.text = ""
  this.color = orange
  this.progress = 1

  this.update = function() {
    this.progress -= 0.005
    var alpha = lerp(0, 256, this.progress)
    this.color.setAlpha(alpha)
  }

  this.scroll = function() {
    this.y -= 36
  }

  this.display = function() {
    fill(this.color)
    strokeWeight(0)
    textSize(12)
    text(this.text, this.x, this.y)
  }
}
