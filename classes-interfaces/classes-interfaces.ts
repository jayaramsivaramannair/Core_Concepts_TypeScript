//A class which implements MotorVehicle interface needs to implement each and each method on the interface
interface MotorVehicle {
  startEngine() : boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number) : void;
  honk(howLong: number): void;
}

class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }
  
  stopEngine(): boolean {
    return true;
  }
  
  brake(): boolean {
    return true;
  }
  
  accelerate(speed: number): void {
    console.log(`Driving faster`);
  }
  
  honk(howLong: number): void {
    console.log(`Beep Beep yeah!`);
  }

}


const car = new Car(); //Instantiates the Car class
console.log(car.startEngine())
console.log(car.stopEngine());
console.log(car.brake());
car.accelerate(20)
car.honk(35)

