//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule.Vehicle {
   constructor(make, model, year, color, mileage) {
      super(make, model, year, color, mileage)

      this.maximumPassengers = 5;
      this.passenger = 0;
      this.numberOfWheels = 4;
      this.maximumSpeed = 160;
      this.fuel = 10;
      this.scheduleService = false;
   }

   // start() method already exits in the parent class

   carInfo() {
      let info = `
         Year: ${this.year},
         Make: ${this.make},
         Model: ${this.model},
         Color: ${this.color},
         Max passengers: ${this.maximumPassengers},
         Max speed: ${this.maximumSpeed},
         Number of wheels: ${this.numberOfWheels},
         Mileage: ${this.mileage},
         Fuel: ${this.fuel}
      `;
      console.log(info);
   }

   loadPassenger(numberOfPassengers) {
      this.passenger += numberOfPassengers
   }

   scheduleService() {
      if (this.mileage > 30000) {
         this.timeForMaintenance = true
         console.log("It's time to bring the car in for a tune-up")
      }
   }
}

let c = new Car("Mecury", "A28 Sedan", 2014, "Blue", "101385");
c.carInfo();
c.typeOfVehicle();
c.start();
c.accelerate();
c.stop();

c.loadPassenger(1);
c.start();
c.accelerate();
c.decelerate();

var x = 0
while (x < 10) {
   c.accelerate();
   x++;
}

c.stop();