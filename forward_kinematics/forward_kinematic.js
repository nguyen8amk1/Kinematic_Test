let width = 800;
let height = 800;

let slider;
let slider1;
let slider2;

let arm0;
let arm1;
let arm2;
let arm3;

let fkSystem;

function setup(){
	createCanvas(width, height); 

    slider = createSlider(0, 2*PI, 0, 0);
    slider.position(10, 10);
    slider.size(200);

    slider1 = createSlider(0, 2*PI, 0, 0);
    slider1.position(10, 50);
    slider1.size(200);

    slider2 = createSlider(0, 2*PI, 0, 0);
    slider2.position(10, 100);
    slider2.size(200);

    fkSystem = new FKSystem(width/2, height/2);

    arm0 = fkSystem.addArm(100);
    arm1 = fkSystem.addArm(100);
    arm2 = fkSystem.addArm(100);
    arm3 = fkSystem.addArm(100);
}

let debug = false;

function keyPressed() {
    if (keyCode === 68) {
        debug = !debug;
        fkSystem.setDebug(debug);
    }
}

function draw(){
	background(200);

    let angle = slider.value(); 
    let angle1 = slider1.value(); 
    let angle2 = slider2.value(); 

    fkSystem.changeAngle(arm0, angle);
    fkSystem.changeAngle(arm1, angle1);
    fkSystem.changeAngle(arm2, angle2);
    fkSystem.changeAngle(arm3, PI/5);

    fkSystem.render();
}
