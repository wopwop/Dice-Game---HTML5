// canvas size
var cwidth = 400;
var cheight = 300;

var dicex = 50;
var dicey = 50;

var dicewidth = 100;
var diceheight = 100;

var dotrad = 6;

var ctx;

function init()
{
    var ch = 1+Math.floor(Math.random()*6);
    drawFace(ch);
}

function drawFace(n){
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.lineWidth = 1;
    ctx.clearRect(dicex, dicey, dicewidth, diceheight);
    ctx.strokeRect(dicex, dicey, dicewidth, diceheight);
    ctx.fillStyle = "#009966";
    
    //starts switch using the number of dots
    switch(n){
        case 1:
            draw1();
            break;
        case 2:
            draw2();
            break;
        case 3:
            draw2();
            draw1();
            break;
        case 4:
            draw4();
            break;
        case 5:
            draw4();
            draw1();
            break;
        case 6:
            draw4();
            draw2min();
            break;
    }
    
    }
    
    function draw1(){
        var dotx;
        var doty;
        ctx.beginPath();
        dotx = dicex + .5*dicewidth;
        doty = dicey + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw2(){
        var dotx;
        var doty;
        ctx.beginPath();
        // first point
        dotx = dicex + 3*dotrad;
        doty = dicey + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2,true);
        // second point
        dotx = dicex + dicewidth - 3*dotrad;
        doty = dicey + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw4(){
        var dotx;
        var doty;
        ctx.beginPath();
        // draw top left dot
        dotx = dicex + 3*dotrad;
        doty = dicey + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        // draw bottom right dot
        dotx = dicex + dicewidth - 3*dotrad;
        doty = dicey + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        // draw top right dot
        dotx = dicex + dicewidth - 3*dotrad;
        doty = dicey + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        // draw bottom left dot
        dotx = dicex + 3*dotrad;
        doty = dicey + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw2min(){
        var dotx;
        var doty;
        ctx.beginPath();
        dotx = dicex + 3*dotrad;
        doty = dicey + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        
        dotx = dicex + dicewidth - 3*dotrad;
        doty = dicey + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }








