var backroundImage, backroundsprite;
var Food;
var Chest;
var Hearts;
var Hands, Handsprite;
var Homewithbed;
var Homeland, Homelandsprite;
var Inverted_Homeland, Inverted_Homelandsprite;
var gameState = 0
var Counter
var Counter1 = 0


function setup() {
  createCanvas(displayWidth,displayHeight);
  Homelandsprite = createSprite(displayWidth/2-350, displayHeight/2+150)
  Inverted_Homelandsprite = createSprite(displayWidth/2+360, displayHeight/2+150)
  Homelandsprite.addImage("Homeland",Homeland)
  Homelandsprite.scale = 0.5
  Inverted_Homelandsprite.addImage("Inverted_Homeland",Inverted_Homeland)
  Inverted_Homelandsprite.scale = 2.2
  Homelandsprite.visible = false
  Inverted_Homelandsprite.visible = false
  Handsprite = createSprite(displayWidth/2,displayHeight/2+280)
  Handsprite.addImage("Hands",Hands)
  Handsprite.scale = 0.7
  Handsprite.visible = false 
  Chestsprite_1 = createSprite(displayWidth/2+360, displayHeight/2+150)
  Chestsprite_1.addImage("Chest",Chest)
  Chestsprite_1.scale = 0.7
  Chestsprite_2 = createSprite(displayWidth/2-350, displayHeight/2+150)
  Chestsprite_2.addImage("Chest",Chest)
  Chestsprite_2.scale = 0.7
  Chestsprite_1.visible = false
  Chestsprite_2.visible = false
  Heartsprite_1 = createSprite(displayWidth/2+360,displayHeight/2+290)
  Heartsprite_1.addAnimation("Hearts",Hearts)
  Heartsprite_1.addAnimation("Half_Heart",Half_Heart)
  Heartsprite_1.scale = 0.2
  Heartsprite_2 = createSprite(displayWidth/2+460,displayHeight/2+290)
  Heartsprite_2.addImage("Hearts",Hearts)
  Heartsprite_2.scale = 0.2
  Heartsprite_3 = createSprite(displayWidth/2+560,displayHeight/2+290)
  Heartsprite_3.addImage("Hearts",Hearts)
  Heartsprite_3.scale = 0.2
  Foodsprite_1 = createSprite(displayWidth/2+360, displayHeight/2+260)
  Foodsprite_1.visible = false;
  Foodsprite_1.scale = 0.5
  Foodsprite_1.addImage("Food", Food);
  Foodsprite_2 = createSprite(displayWidth/2-350, displayHeight/2+260)
  Foodsprite_2.visible = false;
  Foodsprite_2.addImage("Food", Food);
  Foodsprite_2.scale = 0.5 
}

function preload() {
  backroundImage = loadImage("pictures/backround.jpg");
  Food = loadImage("pictures/Food.png");
  Hearts = loadImage("pictures/Hearts.png");
  Hands = loadImage("pictures/Hands.png");
  Chest = loadImage("pictures/Chest.png");
  Homewithbed = loadImage("pictures/Home With Bed.jpg");
  Homeland = loadImage("pictures/Homeland.png");
  Inverted_Homeland = loadImage("pictures/InvertedHomeland.png");
  Half_Heart = loadImage("pictures/Half_Hearts.png")
}

function draw() {
  if(gameState == 0) {
  background(backroundImage);
  Homelandsprite.visible = true
  Inverted_Homelandsprite.visible = true
  Handsprite.visible = true
  Chestsprite_1.visible = false
  Chestsprite_2.visible = false
  if(keyWentDown("O")) {
  gameState = 1
  }
  }
  if (gameState == 1) {
  background(Homewithbed)
  Homelandsprite.visible = false
  Inverted_Homelandsprite.visible = false
  Handsprite.visible = true
  Chestsprite_1.visible = true
  Chestsprite_2.visible = true
  if(keyWentDown("E")){
  Foodsprite_1.visible = true;
  Foodsprite_2.visible = true;
  if(Foodsprite_1.visible == true || Foodsprite_2.visible == true){
  Foodsprite_1.x = (displayWidth/2-560)
  Foodsprite_1.y = (displayHeight/2+310)
  Foodsprite_2.x = (displayWidth/2-480)
  Foodsprite_2.y = (displayHeight/2+310)
  }
  }
  if(keyWentDown("Q") && Counter1 == 0){
  Foodsprite_1.visible = false
  }
Counter1 = 1  
console.log(Counter1)  
if(keyWentDown("Q") && Counter1 == 1 ){
    Foodsprite_2.visible = false
    }
  if (keyWentDown("B")){
  gameState = 0 
  } 
  }
  //for(var i=270;i>0;i--){
  //if(i==265) {
  //Heartsprite_1.addImage("Half_Heart",Half_Heart)
  //}
  //}
  Counter = setInterval(changeImage_1,10000)
  clearInterval(Counter)
  Counter = 0
  setInterval(Heartsprite_1.visible = false, 15000)
  
  drawSprites();


  //setInterval(changeImage_2,75000)
  //setInterval(changeImage_3,125000)

}
function changeImage_1(){
Heartsprite_1.changeAnimation("Half_Heart", Half_Heart)
Heartsprite_1.scale = 0.4
//setInterval(Heartsprite_1.visible = false, 35000)

}
/*function changeImage_2(){
Heartsprite_2.changeAnimation("Half_Heart", Half_Heart)
Heartsprite_2.scale = 0.4
setInterval(Heartsprite_2.visible = false, 100000)
}
function changeImage_3(){
Heartsprite_3.changeAnimation("Half_Heart", Half_Heart)
Heartsprite_3.scale = 0.4
setInterval(Heartsprite_3.visible = false, 150000)
}
*/

//function mouseDragged(){
//}