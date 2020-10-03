var bgimg,bimg,gbimg,bbimg,pbimg,rbimg,bg,b,blueb,redb,greenb,pinkb,arrowimg,arr,score;
var gg,bg,rg,pg,ag;


function preload(){
 //load your images here 
 bgimg=loadImage("background0.png");
  bimg=loadImage("bow0.png");
  bbimg=loadImage("blue_balloon0.png");
   gbimg=loadImage("green_balloon0.png");
  rbimg=loadImage("red_balloon0.png");
  pbimg=loadImage("pink_balloon0.png");
  arrowimg=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  bg=createSprite(0,0,600,600);
  bg.addImage(bgimg);
  bg.scale=3;
  

  
    b=createSprite(500,200);
    b.addImage("bow",bimg);
    b.scale=1.5;
    
    
    score=0;
  
     /* for(var i=170;i<400;i=i+75){
     blueb=createSprite(150,i,150,i+50) ;
   
       blueb.addImage(bbimg); 
    blueb.scale=0.1;
    
    }
   for(var i=150;i<470;i=i+75){
     greenb=createSprite(100,i,100,i+50) ;
   
       greenb.addImage(gbimg); 
    greenb.scale=0.1;
}
  for(var i=80;i<520;i=i+70){
     redb=createSprite(50,i,50,i+50) ;
   
       redb.addImage(rbimg); 
    redb.scale=0.1;
  }
    for(var i=250;i<350;i=i+70){
     pinkb=createSprite(200,i,200,i+50) ;
   
       pinkb.addImage(pbimg); 
    pinkb.scale=1.2;
    }*/
  
  gg=new Group();
  bg=new Group();
  rg=new Group();
  pg=new Group();
  ag=new Group();
}
function draw() {
bg.velocityX=-3;
  if(bg.x<0){
    bg.x=bg.width/2;
  
  }
  //add code here

  //add code here
  b.y=World.mouseY;
  
if(keyDown("space")){
  arrow();
}
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon);
  if(World.frameCount % 40 === 0){
    if(select_balloon == 1){
      rb();
    }else if (select_balloon == 2){                                                                    
      bb();
    }else if (select_balloon == 3){
      gb();
    } else{
      pb();
    }
    
  }
  
  if(ag.isTouching(rg)){
    rg.destroyEach();
  ag.destroyEach();
    score=score+1;}
  else if(ag.isTouching(bg)){
    bg.destroyEach();
  ag.destroyEach();
    score=score+1;}
  else if(ag.isTouching(gg)){
    gg.destroyEach();
  ag.destroyEach();
    score=score+1;}
  else if(ag.isTouching(pg)){
    pg.destroyEach();
  ag.destroyEach();
    score=score+1;}
  
  drawSprites()
text("POINTS    "  +score,500,60);
}

function arrow(){
    arr=createSprite(500,200);
    arr.addImage(arrowimg);
    arr.velocityX=-3;
  arr.scale=0.5;
  
arr.y=b.y;
  ag.add(arr);


}
function bb(){
  if(frameCount%30===0){
    
   blueb=createSprite(0,200,150,200) ;
   blueb.y=Math.round(random(20,560));
       blueb.addImage(bbimg); 
    blueb.scale=0.1;
  blueb.velocityX=5;
    blueb.lifetime=100;
    bg.add(blueb);
  }
}
function rb(){
  if(frameCount%30===0){
    
   redb=createSprite(0,200,150,200) ;
   redb.y=Math.round(random(20,360));
       redb.addImage(rbimg); 
    redb.scale=0.1;
  redb.velocityX=+5;
    redb.lifetime=100;
    rg.add(redb);
  }
}
function gb(){
  if(frameCount%30===0){
    
   greenb=   createSprite(0,200,150,200) ;
   greenb.y=Math.round(random(20,360));
       greenb.addImage(gbimg); 
    greenb.scale=0.1;
  greenb.velocityX=+5;
    greenb.lifetime=100;
    gg.add(greenb);
  }
}
function pb(){
  if(frameCount%30===0){
    
   pinkb=createSprite(0,200,300,200) ;
   pinkb.y=Math.round(random(10,350));
       pinkb.addImage(pbimg); 
    pinkb.scale=1.5;
  pinkb.velocityX=+5;
    pinkb.lifetime=100;
    
    pg.add(pinkb); 
  }
}
