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
console.log(circle.radius);
circle.draw();