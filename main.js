function preload() {  
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()

}

function draw() {
   image(video, 70, 50, 500, 380);
   fill(200,0,255);
   rect(30, 20, 580, 10);
   rect(30, 20, 10, 440);
   rect(30, 450, 580, 10);
   rect(600, 20, 10, 440);
   fill(0,30,255) 
   ellipse(35, 35, 55, 55);
   ellipse(605, 35, 55, 55);
   ellipse(35, 450, 55, 55);
   ellipse(605, 450, 55, 55);
}

function take_snapshot() {
save('border.png');
}