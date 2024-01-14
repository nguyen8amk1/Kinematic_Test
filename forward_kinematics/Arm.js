class Arm { 
    constructor(startX, startY, length, angle) {
        this.angle = angle; 
        this.length = length;

        this.startX = startX; 
        this.startY = startY; 

        this.endX = this.startX + cos(this.angle)*this.length; 
        this.endY = this.startY + sin(this.angle)*this.length; 

        this.parent = null;
        this.accuAngle = this.angle;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    getAngle() {
        return this.angle;
    }

    getAccumulatedAngle() {
        return this.accuAngle;
    }

    setLength(length) {
        this.length = length;
    }

    setStartX(x) {
        this.startX = x;
    }

    setStartY(y) {
        this.startY = y;
    }

    getEndX() {
        return this.endX; 
    }

    getEndY() {
        return this.endY; 
    }





    attach(parent) {
        this.parent = parent;
    }

    _update() {
        let newAngle = this.angle;
        if(this.parent) {
            this.setStartX(this.parent.getEndX());
            this.setStartY(this.parent.getEndY());
            newAngle = this.angle + this.parent.getAccumulatedAngle();
        }

        this.accuAngle = newAngle; 

        this.endX = this.startX + cos(newAngle)*this.length; 
        this.endY = this.startY + sin(newAngle)*this.length; 
    }

    render() {
        this._update();

        strokeWeight(5);
        line(this.startX, this.startY, this.endX, this.endY);
        strokeWeight(1);

    } 
}; 

