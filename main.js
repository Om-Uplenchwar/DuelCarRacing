roverX = 10;
roverY = 10;
racecar_img = "racecar.jpg.png";
racecar1_img = "racecar1.jpg"; 
background_img = "race-track.jpg";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    racecar_imgTag = new Image();
    racecar_imgTag.onload = uploadRover;
    racecar_imgTag.src = racecar_img;
}

function add1() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    racecar_img1Tag = new Image();
    racecar_img1Tag.onload = uploadRover1;
    racecar_img1Tag.src = racecar1_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(racecar_imgTag, roverX, roverY, roverWidth, roverHeight);
}

function uploadRover1() {
    ctx.drawImage(racecar_img1Tag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }

    if(keyPressed == '40') {
        down();
        console.log("down");
    }

    if(keyPressed == '37') {
        left();
        console.log("left");
    }

    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }

    if(keyPressed == '40') {
        down();
        console.log("down");
    }

    if(keyPressed == '37') {
        left();
        console.log("left");
    }

    if(keyPressed == '39') {
        right();
        console.log("right");
    }

    
    if(keyPressed == '87') {
        up1();
        console.log("up");
    }

    if(keyPressed == '83') {
        down1();
        console.log("down");
    }

    if(keyPressed == '65') {
        left1();
        console.log("left");
    }

    if(keyPressed == '68') {
        right();
        console.log("right");
    }

    
}

function up() {
    if(roverY > 0) {
        roverY = roverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(roverY < 500) {
        roverY = roverY + 10;
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(roverX > 0) {
        roverX = roverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(roverX < 700) {
        roverX = roverX + 10;
        uploadBackground();
        uploadRover();
    }
}

function up1() {
    if(roverY > 0) {
        roverY = roverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down1() {
    if(roverY < 500) {
        roverY = roverY + 10;
        uploadBackground();
        uploadRover();
    }
}

function left1() {
    if(roverX > 0) {
        roverX = roverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right1() {
    if(roverX < 700) {
        roverX = roverX + 10;
        uploadBackground();
        uploadRover();
    }
}

