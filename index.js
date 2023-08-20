// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw");
        }
    }
}

const circle = createCircle(6);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const anotherCircle = new Circle(6);