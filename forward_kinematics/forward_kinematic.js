let width = 800;
let height = 800;

let slider;
let slider1;

let arm0;
let arm1;

function setup(){

	createCanvas(width, height); 

    slider = createSlider(0, 2*PI, 0, 0);
    slider.position(10, 10);
    slider.size(200);

    slider1 = createSlider(0, 2*PI, 0, 0);
    slider1.position(10, 50);
    slider1.size(200);

    arm0 = new Arm(width/2, height/2, 200, 0);
    arm1 = new Arm(arm0.getEndX(), arm0.getEndY(), 200, 0);

    arm1.attach(arm0);
}

function draw(){
	background(200);

    let angle = slider.value(); 
    let angle1 = slider1.value(); 
    arm0.setAngle(angle);
    arm0.render();

    arm1.setAngle(angle1);

    arm1.render();
}
