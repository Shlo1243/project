function preload() {

}

function setup() {
canvas=createCanvas(640,480);
video=createCapture(VIDEO);
video.hide();
canvas.center();
tintcolor="";
}

function draw() {
image(video,0,0,600,440);
tint(tintcolor);
fill("red");
circle(50,50,80);
circle(50,430,80);
circle(590,50,80);
circle(590,430,80);
fill("black");
rect(90,40,460,20);
rect(90,420,460,20);
rect(40,90,20,300);
rect(580,90,20,300);
}

function applyColor() {
    tintcolor=document.getElementById("i1").value;
}

function saveImage() {
    save("RobloxX.jpg")
}