class FKSystem {
    // TODO: 
    // API: 
    
    // attach new arm 
    // render the system 
    // control the angle of individual arm 
    
    constructor(x, y) {
        this.arms = [];
        this.x = x;
        this.y = y;
    }

    addArm(length) {
        // NOTE: only the  
        let arm = new Arm(this.x, this.y, length, 0);
        this.arms.push(arm);
        return arms.length - 1;
    }

    changeAngle(id) {
        
    }
    
    render() {

    }
}; 


let width = 800;
let height = 800;

let slider;
let slider1;
let slider2;

let arm0;
let arm1;
let arm2;
let arm3;

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

    arm0 = new Arm(width/2, height/2, 100, 0);
    arm1 = new Arm(arm0.getEndX(), arm0.getEndY(), 100, 0);
    arm2 = new Arm(arm1.getEndX(), arm1.getEndY(), 100, PI/6);
    arm3 = new Arm(arm2.getEndX(), arm2.getEndY(), 100, PI/6);

    arm1.attach(arm0);
    arm2.attach(arm1);
    arm3.attach(arm2);
}

function draw(){
	background(200);

    let angle = slider.value(); 
    let angle1 = slider1.value(); 
    let angle2 = slider2.value(); 

    arm0.setAngle(angle);
    arm1.setAngle(angle1);
    arm2.setAngle(angle2);

    //arm3.setAngle(angle);

    arm0.render();
    arm1.render();
    arm2.render();
    arm3.render();
}
