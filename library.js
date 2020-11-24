//function bounceOff(){
    if (rectangle1.x - package.x < package.width/2 + rectangle1.width/2
        && package.x - rectangle1.x < package.width/2 + rectangle1.width/2) {
      movingRect.velocityX = rectangle1.velocityX * (-1);
      package.velocityX = package.velocityX * (-1);
    }
    if (rectangle1.y - fixedRect.y < package.height/2 + rectangle1.height/2
      && package.y - rectangle1.y < packages.height/2 + rectangle1.height/2){
      rectangle1.velocityY = rectangle1.velocityY * (-1);
      package.velocityY = package.velocityY * (-1);
    }
