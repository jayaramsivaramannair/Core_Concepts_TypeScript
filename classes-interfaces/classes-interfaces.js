var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    Car.prototype.stopEngine = function () {
        return true;
    };
    Car.prototype.brake = function () {
        return true;
    };
    Car.prototype.accelerate = function (speed) {
        console.log("Driving faster");
    };
    Car.prototype.honk = function (howLong) {
        console.log("Beep Beep yeah!");
    };
    return Car;
}());
var car = new Car(); //Instantiates the Car class
console.log(car.startEngine());
console.log(car.stopEngine());
console.log(car.brake());
car.accelerate(20);
car.honk(35);
