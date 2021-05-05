class Food{
    constructor(foodStock , lastFed,milk ){
        milk=createSprite(120,150,20,20);
        milkImage=loadImage("images/Milk.png");
    }

    display()
    {
        milk.addImage(milkImage);
    }
    

    getFoodStock()
    {
        fedTime=database.ref("FeedTime");
        fedTime.on("value",function(data){
            lastFed=data.val();
        })
    }

    updateFoodStock()
    {
       
    }

    deductFood()
    {

    }

    
}