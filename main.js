nose_x= 0
nose_y= 0

l_wrist= 0
r_wrist= 0

difference= 0

function preload(){

}

function setup(){

    camera=createCapture(VIDEO)
    camera.size(550,550)

    canvas=createCanvas(550,550)
    canvas.center()
 
    poseNet=ml5.poseNet(camera,modelLoaded)
    poseNet.on('pose',gotPoses)

}

function modelLoaded(){

    console.log("posenet is initialized")
}