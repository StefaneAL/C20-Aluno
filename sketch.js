var retFixo, retMovel;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  retFixo = createSprite(200,200,50,50)
  retFixo.shapeColor = "green"
  retFixo.debug=true
  retMovel = createSprite(400,400,50,80)
  retMovel.shapeColor = "gold"
  retMovel.debug=true
}

function draw() {
  background(0,0,0);  
  retMovel.x = World.mouseX
  retMovel.y = World.mouseY

  if(retMovel.x-retFixo.x < retMovel.width/2 + retFixo.width/2){
    retFixo.shapeColor = "red"
    retMovel.shapeColor = "blue"
  }else{
    retFixo.shapeColor = "green"
    retMovel.shapeColor = "gold"
  }
  console.log(retMovel.x-retFixo.x)
  drawSprites();
}