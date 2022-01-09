var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return "Hello, my name is " + this.name;
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return "I can dive upto " + howDeep + " meters";
    };
    return Fish;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        this.name = name;
    }
    Cat.prototype.howl = function () {
        return "I do not howl as I am a cat!";
    };
    return Cat;
}());
//If the parameter is not of type 'PET"
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return "Fish cannot talk, sorry!";
    }
}
var pet1 = new Dog('Tommy');
var pet2 = new Fish('Goldie');
var pet3 = new Cat('Jerry');
console.log(talkToPet(pet1));
console.log(talkToPet(pet2));
