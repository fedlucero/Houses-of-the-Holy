var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;



const q = Math.floor(random(1,1.3))



const paleta1 = ["#ff0f7b","#f89b29"]
const paleta2 = ["#0061ff","#60efff"]
const paleta3 = ["#293F14","#FF99C8"]//
const paleta4 = ["#ff1b6b","#45caff"]
const paleta5 = ["#42047e","#07f49e"]
const paleta6 = ["#293F14","#FF785A"]//
const paleta7 = ["#00ff87","#60efff"]
const paleta8 = ["#b5c6e0","#ebf4f5"]
const paleta9 = ["#e81cff","#40c9ff"]
const paleta10 = ["#103783","#9bafd9"]
const paleta11 = ["#08415c","#08415c"]
const paleta12 = ["#102542","#cc2936"]
const paleta13 = ["#102542","#faae7b"]
const paleta14 = ["#2b2d42","#8d99ae"]//
const paleta15 = ["#102542","#f87060"]//
const paleta16 = ["#696eff","#f8acff"]
const paleta17 = ["#432371","#faae7b"]//
const paleta18 = ["#343e3d","#a8c256"]
const paleta19 = ["#0d3b66","#faf0ca"]//
const paleta20 = ["#00f59b","#7014f2"]//
const paleta21 = ["#264653","#2a9d8f"]
const paleta22 = ["#006e90","#f18f01"]//
const paleta23 = ["#d5b3ff","#fbd960"]//
const paleta24 = ["#d5b3ff","#fbd960"]//
const paleta25 = ["#e9b7ce","#d3f3f1"]//
const paleta26 = ["#ff5858","#ffc8c8"]//
const paleta27 = ["#5bc0eb","#fde74c"]//
const paleta28 = ["#95f9c3","#0b3866"]//
const paleta29 = ["#233d4d","#fe7f2d"]//
const paleta30 = ["#ffba49","#20a39e"]//
const paleta31 = ["#003049","#d62828"]//
const paleta32 = ["#f8c828","#007e5d"]//

const paleta33 = ["#ef798a","#f7a9a8"]//

const paleta34 = ["#6c9a8b","#e8998d"]//
const paleta35 = ["#e8c547","#30323d"]//
const paleta36 = ["#f68080","#f9b16e"]//

const paleta37 = ["#c05746","#adc698"]//
const paleta38 = ["#6c17b6","#ff5e00"]//

const paleta39 = ["#0f7173","#f05d5e"]//




const paletas = [paleta1,paleta2,paleta3,paleta4,paleta5,paleta6,paleta7,paleta8,paleta9,paleta10,paleta11,paleta12,paleta13,paleta14,paleta15,paleta16,paleta17,paleta18,paleta19,paleta20,paleta21,paleta22,paleta23,paleta24,paleta25,paleta26,paleta27,paleta28,paleta29,paleta20,paleta21,paleta22,paleta32,paleta33,paleta34,paleta35,paleta36,paleta37,paleta38,paleta39]
const paleta = randomFromList(paletas);
// const paleta = paleta18
const colorTronco = `#212529`

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }






a = random(10,25)
b = random(10,25)
c = random(10,25)
d = random(10,40)
e = random(20,40)
f = random(20,40)
g = random(20,40)
h = random(0.4,0.8)
i = random(0.4,0.8)
j = random(0.4,0.8)
k = random(0.4,0.8)
l = random(0.4,0.8)
m = random(0.4,0.8)
n = random(0.4,0.8)
o = random(0.4,0.8)
xs = random(100,900)
ys  = random(50,400)
tams = random(6,30)
def = fxrand()
t = random(0,310)
di = random(1,5)

// drawBackground()
fxpreview() 

  

createBackground()
// createStarts()
// createMoon()
createOverlay(paleta[0], 1, 2, m, f);
createTree()
// createCasaPintada(500,500)


fxpreview()





function createBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, paleta[1]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(1, paleta[0]);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createMoon() {
  ctx.fillStyle = paleta[1];
  ctx.beginPath();
  ctx.arc(xs,ys,tams,0,Math.PI *2 )
  ctx.fill(); 

}

function createStarts(){

  for (i = 0; i < 900 ; i++){
    ctx.fillStyle = paleta[1]
    ctx.beginPath();
    p = random(0.3,1.3)
    ctx.arc(fxrand()*i*200,fxrand()*i*40, p, 0, 2 * Math.PI, true);
    ctx.fill()
    ctx.strokeStyle = paleta[1];
    ctx.stroke();
    console.log('estrella');

  }
}

// function createTree(centerX, inY, length, angle, depth, branchWidth) {
 
//   var newLength, newAngle, newDepth, maxBranch = 2,
//       endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

//   ctx.beginPath();
//   ctx.moveTo(centerX, inY);
//   endX = centerX + length * Math.cos(angle);
//   endY = inY + length * Math.sin(angle);
//   ctx.lineCap = 'round';
//   ctx.lineWidth = branchWidth;
//   ctx.lineTo(endX, endY);
//   ctx.lineTo(endX+8, endY+8)
//   if (depth <= 1) {
   
//     ctx.strokeStyle = colorTronco;
//   }
//   else if (depth <= 2) {
   
//     ctx.strokeStyle = colorTronco;
//   }
//   else {
//     ctx.strokeStyle =colorTronco;
//   }
 
//   ctx.stroke();
//   newDepth = depth - 1;

//   if(!newDepth) {
//     return;
//   }
//   subBranches = (fxrand() * (maxBranch -1.3)) +1.3;
//   branchWidth *= 0.8;

//   for (var i = 0; i < subBranches; i++) {
//     newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
//     newLength = length * (0.7 + fxrand() * 0.3);
    
//     createTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
//   }

// }

function createTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  
  if (depth <= 1) {
   
    ctx.strokeStyle = colorTronco;
  }
  else if (depth <= 2) {
   
    ctx.strokeStyle = paleta[1];
  }
  else {
    ctx.strokeStyle =colorTronco;
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -1.3)) +1.3;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    createTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}


function createCasaPintada(ejex,ejey){
  x = ejex
  y= ejey
  tam =random(50,150)
  taml=tam*3/2
  largo= tam+taml
  
  ctx.beginPath()
  
  ctx.fillStyle="#495057"
  ctx.globalAlpha = 1;
  
  ctx.moveTo(x,y)
  ctx.lineTo(x,y+tam)
  ctx.lineTo(x+tam,y+tam)
  ctx.lineTo(x+tam,y)
  ctx.lineTo(x+tam/2,y-tam/2)
  ctx.lineTo(x,y)
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(x+tam/2,y-tam/2)
  ctx.lineTo(x+tam*2,y-tam/2)
  ctx.lineTo(x+largo,y)
  ctx.lineTo(x+tam,y)
  ctx.lineTo(x+tam/2,y-tam/2)
  ctx.fillStyle="#333333"
  
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(x+tam,y)
  ctx.lineTo(x+largo,y)
  ctx.lineTo(x+largo,y+tam)
  ctx.lineTo(x+tam,y+tam)
  ctx.lineTo(x+tam,y)
  ctx.fillStyle="#fefae0"
  
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.fillStyle="#495057"
  ctx.fillRect(x+largo,y+tam,-20,100)
  ctx.fillRect(x+largo-30,y+tam,-20,100)
  ctx.fill()
  ctx.closePath()

  

  

}

function createCasaAtras(ejex,ejey){

  x = ejex
  y= ejey
  tam = random(70,100)
  tam3=tam*3
  tam2=tam*2
  medioTam= tam/3

  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x-tam3,y)
  ctx.lineTo(x-tam3,y-tam)
  ctx.lineTo(x-tam2,y-1.8*tam)
  ctx.lineTo(x-tam2,y-tam2)
  ctx.lineTo(x-tam,y-tam3)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x,y)
  ctx.lineWidth = 1;
  ctx.fillStyle="#eeeeee"
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x+medioTam,y-1.5*tam)
  ctx.lineTo(x+medioTam,y)
  ctx.lineTo(x,y)
  ctx.fillStyle="#495057"
  ctx.lineWidth = 1;
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam3,y-tam)
  ctx.lineTo(x-tam2,y-1.8*tam)
  ctx.moveTo(x-tam2,y-tam2)
  ctx.lineTo(x-tam,y-tam3)
  ctx.lineTo(x,y-tam2)
  ctx.lineTo(x+medioTam,y-1.5*tam)
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#333333";
  ctx.stroke()

}
function createCasaCheta(ejex,ejey){

  x = ejex
  y= ejey
  tam = 80
  tam3=tam*3/2
  tam2=tam*2
  tam5=tam*5/2
  

  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x-tam5,y)
  ctx.lineTo(x-tam5,y-tam)
  // ctx.lineTo(x-tam3,y-tam3)
  ctx.lineTo(x-tam3,y-tam2)
  ctx.lineTo(x,y-tam)
  ctx.lineTo(x,y)
  ctx.lineWidth = 1;
  ctx.fillStyle="#eeeeee"
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam5,y-tam+6)
  ctx.lineTo(x-tam3,y-tam2+6)
  ctx.moveTo(x-tam3,y-tam2+6)
  ctx.lineTo(x,y-tam+6)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(x-tam5,y-tam)
  ctx.lineTo(x-tam3,y-tam2)
  ctx.moveTo(x-tam3,y-tam2)
  ctx.lineTo(x,y-tam)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 5;
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.fillStyle="#495057"
  ctx.moveTo(x,y-tam)
  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.lineTo(x+tam/3,y-10)
  ctx.lineTo(x,y)
  ctx.fill()
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x,y-tam)
  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 6;
  ctx.stroke()
  ctx.closePath()
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x-tam3,y-tam2)
  ctx.lineTo(x-tam3+tam/3,y-tam2+10)

  ctx.lineTo(x+tam/3,y-tam+10)
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 6;
  ctx.stroke()
  ctx.closePath()
  ctx.stroke()
  

}




function createOverlay(color, filling, saw, hard,alto) {
    hard = hard || 0.5;
    var	maxHeight =1000; //el inicio
    var t = random(50,700)
    var r = random(250,500)
    var k = random(550,700)
    var casa = random(50,700)
    var otraCasa= random(200,700)

    var x,
height = 0.5 * maxHeight, // define el alto
slope = (fxrand() * saw) * 2 - saw;

for (x = 0; x < canvas.width; x++) {

height += slope * 0.25;
// height += slope * 0.5;
slope += (fxrand() * hard) * 2 - hard;

if (slope > saw) {
  slope = saw;
}

if (slope < -saw) {
  slope = -saw * 0.3;
}
      
      ctx.beginPath();
      
      ctx.moveTo(x , maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
  
    
      if(x===t){
        alto= random(15,25)
        bush= random(12,19)
        createTree(x+2,height, alto, -Math.PI / 2, 19,4);
        //hacer otro if para segundo arbol
        // createTree(x+2,height, alto, -Math.PI / 2, 19,4);
     

      }
      if(x===r){
       
        createPoste(r+5,height+20)
     

      }
      // if(x===k){
       
      //   createTree(x,height+8, 18, -Math.PI / 2, 13,2);
     

      // }

      if(x%27===0){
        ctx.beginPath()
        ctx.moveTo(x+2,height)
        // ctx.lineTo(x+random(-1,1,height-random(10,15)))
        ctx.lineTo(x+random(-4,4),height-random(15,20))
        ctx.strokeStyle = colorTronco;
        ctx.stroke()
      }

      // if(x===casa){ 

     
      // createCasaPintada(x,height-40)

      // }

      if(x===otraCasa){
        createCasaAtras(x+300,height+100)
      }
  

    }
  }



  function createPoste(px,py){
    ctx.beginPath()
    ctx.moveTo(px,py)
    ctx.lineTo(px,py-100)
    ctx.lineWidth=4
    ctx.lineCap = 'round';
    ctx.strokeStyle = `#212529`
    ctx.moveTo(px,py-85)
    ctx.lineTo(px-15,py-88)
    ctx.moveTo(px,py-85)
    ctx.lineTo(px+15,py-82)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(px-12,py-90,2,0 , 2* Math.PI)
    
    
  ctx.fill()
  ctx.stroke()
  ctx.closePath() 
  ctx.beginPath()
  ctx.arc(px+12,py-86,2,0 , 2* Math.PI) 
  
ctx.fill()
ctx.stroke()
ctx.closePath() 
ctx.beginPath()
ctx.bezierCurveTo(px-12,py-90,px,py-0,px,py);
ctx.moveTo(px+12,py-90)
ctx.bezierCurveTo(px+12,py-90,px,py-0,px,py);
ctx.lineWidth=1
ctx.stroke()
ctx.closePath()

  
  }


