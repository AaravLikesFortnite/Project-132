bed="";
object=[];
status="";

function preload(){
    doggie=loadImage('bed.jpg');
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(bed,0,0,500,400);
}

