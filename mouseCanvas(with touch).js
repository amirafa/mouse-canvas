const canvas=document.querySelector('#canvas');
// btn.addEventListener('click',function(e){
//     console.log("clicked");
//     //e.preventDefault();
// })



window.addEventListener('mousedown',onDown);
window.addEventListener('mouseup',onUp);

window.addEventListener('touchstart',onDown);
window.addEventListener('touchend',onUp);

//canvas.addEventListener('mousedown',onDrag);

var lastx = 0;
var lasty = 0;

var timer=null;

var isDown=false;
function onDown(e){
    //console.log("clicked");
    let val=e;
    console.log(val);
    isDown=true;
    // canvas.height=e.clientY;
    // canvas.width=e.clientX;
    lastx = eX(val);
    lasty = eY(val);

    timer = setInterval(function(){
        // the function can do whatever you need it to
        console.log("Mouse is down!");
        spot(eX(val),eY(val));
        
        window.addEventListener('mousemove',onMove);
        window.addEventListener('touchmove',onMove);
        
      }, 1);
} 

function onMove(e){
    if(isDown){
        // canvas.height=e.clientY;
        // canvas.width=e.clientX;
        
        spot(eX(e),eY(e),lastx,lasty);
        lastx = eX(e);
        lasty = eY(e);
    }
    
}

function onUp(e){
    clearInterval(timer);
    isDown=false;
    lastx=0;
    lasty=0;
}


function spot(x,y,lx = x,ly = y){
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 5, 0 ,2 * Math.PI );
    
    ctx.fillStyle = 'black';
    ctx.fill();
    // ctx.strokeStyle = 'black';
    // ctx.stroke();
    //
    console.clear();
    console.log(x,lastx);
    var line = c.getContext("2d");
    line.lineWidth = 2;
    line.lineHeight = 2;
    line.moveTo(x, y);
    line.lineTo(lx, ly);
    line.fillStyle = 'black';
    line.fill();
    line.strokeStyle = 'black';
    line.stroke();

}    

function detectMob() {
    return ( window.innerWidth <= 800  );
}

function eX(e){
    var vari;
    if(detectMob()){
        vari= e.touches[0].clientX;
    }
    else{
        vari= e.clientX;
    }
    return vari;
}

function eY(e){
    var vari;
    if(detectMob()){
        vari= e.touches[0].clientY;
    }
    else{
        vari= e.clientY;
    }
    return vari;
}



 