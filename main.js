function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!11!!");
}

function draw()
{
    background("rgb(241, 250, 250)");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}

function gotPoses(results)
{
    if(results.length > 0);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    console.log("noseX = " + noseX + " NoseY = "  + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    RightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference is = " + difference);

    
}

function draw() {
    textSize(difference / 10)
    //zalgo.org
    text("Ţ̷̡̖̥̄̏͛ͅh̶̺̜͛o̴̻̿͠m̴̡̨̞̊̑́a̸̺̞͘͝ś̶̛͈", noseX, noseY)

    fill("rgb(230, 78, 82)");
    stroke("#FFFFFF");
}


noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

