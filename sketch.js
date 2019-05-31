//Snake 4 now by Nishat, Abdullah, & Taina
//Period 8

let snake;
let rez = 20;
let food;
let w, h;
let score = 0;
let c = 0;
let color = ["red","orange","yellow","green","blue","purple"];

//28:24
//pic: 460x215

function setup (){

    //canvas centered
    let canvas = createCanvas(900, 600);
    canvas.parent('sketch-holder');

    //allows for grid-like movement
    w = floor(width / rez);
    h = floor(height / rez);

    frameRate(10); //speed
    snake = new Snake();
    foodLocation();
}
//spawns random food
function foodLocation(){
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector (x,y);
}
//movement of snake
function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.setDir(0, -1);
    }
    else if(keyCode === DOWN_ARROW){
        snake.setDir(0, 1);
    }
    else if(keyCode === LEFT_ARROW){
        snake.setDir(-1, 0);
    }
    else if(keyCode === RIGHT_ARROW){
        snake.setDir(1, 0);
    }
    else if (keyCode== ' ' ){
    snake.grow ();
    }
}

function draw (){

    scale(rez);
    background('gray');

    fill(0,255,0);
    textSize(1);
    text('score = ' + score,1,1);

    //spawns new food
    if (snake.eat(food)) {
        foodLocation();
        score++;
        c = (c + 1) % 6;
    }

    snake.update();
    snake.show();

    //food
    noStroke();
    fill(color[c]);
    rect(food.x, food.y, 1,1);

    //when snake dies
     if (snake.endGame()) {
        background (255,0,0);
        //text
        fill(0,0,0);
        textSize(3);
        textAlign(CENTER);
        text("GAME OVER!", width/(2*rez), height/(2*rez));
        text("score: " + score, (width/(2*rez)), (height/(2*rez)) + 3);

        noLoop();
    }

}