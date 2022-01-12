var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('driving');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
