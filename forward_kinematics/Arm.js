class Arm { 
    constructor(startX, startY, length, angle) {
        this.angle = angle; 
        this.length = length;

        this.startX = startX; 
        this.startY = startY; 

        this.endX = this.startX + cos(this.angle)*this.length; 
        this.endY = this.startY + sin(this.angle)*this.length; 

        this.parent = null;
    }

    setAngle(angle) {
        this.angle = angle;
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

    render() {
        strokeWeight(5);
        if(this.parent) {
            // TODO: fix some angle issues 
            
            this.setStartX(this.parent.getEndX());
            this.setStartY(this.parent.getEndY());
        }

        this.endX = this.startX + cos(this.angle)*this.length; 
        this.endY = this.startY + sin(this.angle)*this.length; 
        line(this.startX, this.startY, this.endX, this.endY);
        strokeWeight(1);
    } 
}; 

