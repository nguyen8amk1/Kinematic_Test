class FKSystem {
    constructor(x, y) {
        this.arms = [];
        this.x = x;
        this.y = y;

        this.debug = false;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setDebug(debug) {
        this.debug = debug;
    }

    changeAngle(id, angle) {
        this.arms[id].setAngle(angle);
    }
    

    addArm(length) {
        let arm = new Arm(this.x, this.y, length, 0);

        if(this.arms.length > 0) {
            console.log(this.arms.length);
            arm.attach(this.arms[this.arms.length - 1]);
        } 

        this.arms.push(arm);
        return this.arms.length - 1;
    }

    render() {

        for(let i = 0; i < this.arms.length; i++) {
            this.arms[i].setDebug(this.debug);
            this.arms[i].render();
        }
    }
}; 

