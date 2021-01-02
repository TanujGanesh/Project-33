const {Engine,World,Bodies}=Matter;

var engine,world;
var grd;
var dv = [];
var pk = [];
var pt;
var z=0;
var sc=0;
var count=0;
var chk=0;
var gmst = "play";
console.log(count);

function setup() {
  createCanvas(400,800);
  engine=Engine.create();
  world=engine.world;

  grd = new Grd(width/2,height-10,width,20);

  for (var i=0;i<9;i++){
    dv.push(new Grd(0+i*50,height-70,5,100))
  }

  for(var r = 80;r<550;r+=40){
    for(var c = 40;c<=370-z;c+=40){
      if(r%80!==0){
        z=0;
      
      }else {
        z=20;
    }
    pk.push(new Pnko(c+z,r,25))
      }
    }
  }

function draw() {
  
  Engine.update(engine,1000/30);
  background(0); 
  
  textSize(20);
  fill(255);
  text("Score : "+sc,30,45);
  //textAlign(CENTER);
  text("100",10,710);
  text("100",360,710);
  text("200",60,710);
  text("200",310,710);
  text("500",110,710);
  text("500",260,710);
  text("100",160,710);
  text("100",210,710);
  grd.display();

  if(gmst==="play"){
    if(pt!=null){
      chk=1;
      var q = pt.body.position;
      pt.display();
      if(q.y>750){
        if(q.x>2.5 && q.x<47.5 || q.x>347.5 && q.x<397.5 || q.x>147.5 && q.x<247.5){
          sc+=100;
          pt=null;
          chk=0; 
        }
        if(q.x>47.5 && q.x<97.5 || q.x>302.5 && q.x<347.5){
          sc+=200;
          pt=null;
          chk=0;
        }
        if(q.x>102.5 && q.x<142.5 || q.x>252.5 && q.x<297.5){
          sc+=500;
          pt=null;
          chk=0;
        }
      }
      if(q.x<0-10||q.x>400+10){
        pt=null;
        chk=0;
      }
    }
  }
  for(var d of dv){
    d.display();
  }
  for(var p of pk){
    p.display();
  }
  text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY);
  if(gmst==="end"){
    push();
    textSize(30);
    fill("yellow");
    text("Game Over",125,610);
    pop();
  }
}

function mouseClicked(){
  if(gmst==="play"&&chk===0){
    count++;
    pt=new Ball(mouseX,10,10,10);
  }
  if(count>5){
    gmst="end";
    count=0;
  }
}