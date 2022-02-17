noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/P5Jpx3PV/moushtache.jpg')
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {    
    image(video, 0, 0, 300, 300);
  
    image(clown_nose, noseX, noseY, 70, 50);
}

function takesnapshot() {
    save('myFilterImage.png')
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('Nothing is there off the timer');
}