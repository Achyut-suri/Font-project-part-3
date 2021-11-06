nose_x=0;
nose_y=0;
diffrence=0;
Wrist_X_Left=0;
Wrist_x_right=0;

function preload()
{

}

function setup()
{
video=createCapture(VIDEO);
video.size(550 , 500);

canvas=createCanvas(550 , 500);
canvas.position(560 , 150);

poseNet=ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);
}



function modelLoaded()
{
console.log('Posenet is Initialized!');
}

function gotPoses(results)
{
 if(results.length>0)
 {
   console.log(results);
   nose_x=results[0].pose.nose.x;
  nose_y=results[0].pose.nose.y;
  console.log("nose_x ="+ nose_x + "nose_y =" + nose_y);
  Wrist_X_Left=results[0].pose.leftWrist.x;
  Wrist_x_right=results[0].pose.rightWrist.x;
  diffrence= floor(Wrist_X_Left - Wrist_x_right);
  console.log("Wrist_X_Left = - " + Wrist_X_Left + "Wrist_X_right" + Wrist_x_right + "diffrence = " + diffrence);
 }
}

function draw()
{
document.getElementById("Text_id").innerHTML="width and height of the Text will be = "+ diffrence + "px";


background("#D3D3D3");
fill('#121111');
stroke('#4fc221');
text('Text', nose_x , nose_y);
textSize(Wrist_X_Left , Wrist_x_right)
}