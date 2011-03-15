// canvas size
var cwidth = 400;
var cheight = 300;

var dicex = 50;
var dicey = 50;

var dicewidth = 100;
var diceheight = 100;

var dotrad = 6;

var ctx;

var dx;
var dy;

var firstturn = true;
var point;

function throwdice(){
    // draw first dice
    var sum;
    var ch = 1+Math.floor(Math.random()*6);
    sum = ch;
    dx = dicex;
    dy = dicey;
    drawFace(ch);
    // draw second dice
    ch = 1+Math.floor(Math.random()*6);
    sum += ch;
    dx = dicex + 150;
    drawFace(ch);
    if(firstturn){
        switch(sum){
            case 7:
            case 11:
                alert("You win!");
                break;
            case 2:
            case 3:
            case 12:
                alert("You lose!");
                break;
            default:
             point = sum;
             firstturn = false;
             alert("You need a follow-up throw");
        }
    }
    else{
        switch(sum){
            case point:
                alert("You win!");
                firstturn = true;
             break;
            case 7:
                alert("You lose!");
                firstturn = true;
        }
    }
}


function drawFace(n){
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.lineWidth = 1;
    ctx.clearRect(dx, dy, dicewidth, diceheight);
    ctx.strokeRect(dx, dy, dicewidth, diceheight);
    ctx.fillStyle = "#009966";
    var dotx;
    var doty;
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
        ctx.beginPath();
        dotx = dx + .5*dicewidth;
        doty = dy + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw2(){
        var dotx;
        var doty;
        ctx.beginPath();
        // first point
        dotx = dx + 3*dotrad;
        doty = dy + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2,true);
        // second point
        dotx = dx + dicewidth - 3*dotrad;
        doty = dy + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw4(){
        var dotx;
        var doty;
        ctx.beginPath();
        // draw top left dot
        dotx = dx + 3*dotrad;
        doty = dy + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        // draw bottom right dot
        dotx = dx + dicewidth - 3*dotrad;
        doty = dy + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        // draw top right dot
        dotx = dx + dicewidth - 3*dotrad;
        doty = dy + 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        // draw bottom left dot
        dotx = dx + 3*dotrad;
        doty = dy + diceheight - 3*dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
    
    function draw2min(){
        var dotx;
        var doty;
        ctx.beginPath();
        dotx = dx + 3*dotrad;
        doty = dy + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        
        dotx = dx + dicewidth - 3*dotrad;
        doty = dy + .5*diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }








