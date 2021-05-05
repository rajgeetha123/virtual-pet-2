
var dog;
var happyDog;
var database;
var foodS=0;
var foodStock;
var assign=0;
var button;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(200,150,20,20);
  dog.addImage(dogImage);
  dog.scale=0.4
  foodStock=database.ref("food");
  foodStock.on("value",function(data){
    foodS=data.val();
  });

  foodObj=new Food(120,150,20,20);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);



  
}


function draw() { 
  background(46,139,87) ;

  //if(keyWentDown(UP_ARROW))
  //{
   // assign=assign+20;
    ///writeStock(assign);
    ///dog.addImage(happyDog);
 // }
fill(255,255,254);
 textSize(15)
 if(lastFed>=12)
 {
   text("Last Feed : "+lastFed512 + " PM",350,30);
 }
 else if(lastFed===0)
 {
   text("Last Feed : 12 AM",350,30)
 }
 else{
   text("Last Feed : "+ lastFed + " AM",350,30);
 }

  milk.display();

  drawSprites();
  

}

function feedDog()
{
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.red('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour(),

  })


}

function writeStock(data)
{
  database.ref("/").set({
    food:data,

  })
}

function addFoods()
{
  foodS++;
  database.ref('/').update({
    Food:foodS,
    
  })
}





