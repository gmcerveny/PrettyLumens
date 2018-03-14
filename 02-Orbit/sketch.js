var payments = [];
var logs = [];

var attractor;

var input;
var showInput = false;

var addresses = ["GBRPYHIL2CI3FNQ4BXLFMNDLFJUNPU2HY3ZMFSHONUCEOASW7QC7OX2H",
"GBS43BF24ENNS3KPACUZVKK2VYPOZVBQO2CISGZ777RYGOPYC2FT6S3K",
"GAAJKG3WQKHWZJ5RGVVZMVV6X3XYU7QUH2YVATQ2KBVR2ZJYLG35Z65A",
"GCNP7JE6KR5CKHMVVFTZJUSP7ALAXWP62SK6IMIY4IF3JCHEZKBJKDZF",
"GDNFUWF2EO4OWXYLI4TDEH4DXUCN6PB24R6XQW4VATORK6WGMHGRXJVB",
"GBFAIH5WKAJQ77NG6BZG7TGVGXHPX4SQLIJ7BENJMCVCZSUZPSISCLU5",
"GD2XJPSTO5KR2OCYKNY5TWZSLVGLDFOCEG7567TYPQOTEOVGPTA5VZ7T",
"GBR3NJF6EGRU6QATQRKZLZ4KKN54URF2NQYXZQ7KO775QHQPMYZPCF2O",
"GB6RKQIKF7BIDPJWEKBDYIVH2KCRPHNO5SD6SWEKZBH4ZFKU74GDVSQ6",
"GAK4CANNJKF5NLVI6JIYB2TPRNJWS6JVYXSUMW3WL6G7A4BRCEW3V4TE",
"GBU2RKB43SAUK2D2OAHJ5LNP7FXP6LUDSZON2KWQPAWSLZPXECUUUADI",
"GDDP7L6V4QBFIOK5PJ7CGHWIQZ7JV7UHMHYWXFA6JIJEYULBANRX5GQ2",
"GCXSYEYP2OHL2SNEE4WZJR2CSJ5KIRA56UJRDWGCELBW5LPVKEUNXHZU"];

// var white = color(255);
// var gray = color(151);
// var orange = color(237,129,23);
// var yellow = color(238,187,24);

function setup() {
  createCanvas(640, 480);
  input = createInput();
  input.changed(newWallet);
  input.hide();
  attractor = new Attractor();
}

function draw() {
  var darkColor = color(91, 106, 114);
  background(darkColor);

  for (var i=0; i<payments.length; i++) {
    var p = payments[i];
    var force = attractor.calculateAttraction(p)
    p.applyForce(force)
    p.update();
    p.display();
    // p.checkEdges();
  }

  for (var i=0; i<logs.length; i++) {
    logs[i].update();
    logs[i].display();
  }
  var i = logs.length;
  while (i--) {
    if (logs[i].alpha <= 0) {
      logs.splice(i, 1)
    }
  }
}

function keyPressed() {
  if (showInput) {
    input.elt.focus();
    return;
  }
  switch(key) {
    case ' ':
      gotPayment(random(addresses),random(0,20));
      break;
    case 'G':
      getWallet();
      break;
  }
}

function gotPayment(from = "", amount = 0) {
  for (var i=0; i<logs.length; i++) {
    logs[i].scroll();
  }
  var log = new Log()
  log.text = "FROM: " + from + "\n" + "AMOUNT: " + amount;
  logs.push(log)


  var mass = map(amount,0,20,0.5,4,true);
  var p = new Particle(random(width), random(height), mass );
  p.applyForce(createVector(random(-4,4), random(-4,4)));
  payments.push(p)
}


function getWallet() {
  showInput = true;
  input.show();
  input.value('');
}

function newWallet() {
  var address = input.value();
  newServer(address)
  showInput = false;
  input.hide();
  clearDisplay();
}

function clearDisplay() {
  logs = [];
  payments = [];
  clear();
}