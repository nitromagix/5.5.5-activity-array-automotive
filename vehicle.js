class Vehicle {
   constructor(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.passenger = 0;
      this.speed = 0;
      this.mileage = mileage;
      this.started = false;
      this.numberOfWheels = 0;
   }

   start() {
      if (this.passenger === 0) {
         console.log("No passenger!");
         return this.started = false;
      }
      if (this.fuel > 0) {
         console.log("engine started...!!!");
         return this.started = true;
      } else {
         console.log("engine cannot start...");
         return this.started = false;
      }
   }
   accelerate() {
      if (this.started) {
         if (this.fuel > 0) {
            console.log(this.speed += 1);
            this.fuel = this.fuel - 1;
         } else {
            console.log(`${this.make} ${this.model} is out of fuel.`);
            this.stop();
         }
      } else {
         console.log("You need to start the engine first.");
      }
   }
   decelerate() {
      if (this.started) {
         if (this.fuel > 0) {
            if (this.speed > 0) {
               console.log(this.speed -= 1);
               this.fuel = this.fuel - 1;
            } else {
               console.log(`${this.make} ${this.model} has stopped moving`);
               this.fuel = this.fuel - 1;
            }
         } else {
            console.log(`${this.make} ${this.model} is out of fuel.`);
            this.stop();
         }
      } else {
         console.log("You need to start the engine first.");
      }
   }
   stop() {
      this.started = false;

      this.speed > 0
         ? console.log(`${this.make} ${this.model} has stopped.`)
         : console.log(`${this.make} ${this.model} is already stopped.`)
      this.speed = 0;
   }

   drive() {
      accelerate();
   }
   brake() {
      decelerate();
   }

   autoPark() {

   }

   autoDrive() {

   }

   typeOfVehicle(wheels) {
      if (this.numberOfWheels == 8 && 8 == this.numberOfWheels) {
         console.log(this.make + " " + this.model + " is a Truck");
      } else if (this.numberOfWheels == 4 && 4 == this.numberOfWheels) {
         console.log(this.make + " " + this.model + " is a Car");
      } else if (this.numberOfWheels == 2 && 2 == this.numberOfWheels) {
         console.log(this.make + " " + this.model + " is a Bike");
      } else {
         console.log("Unknown type of vehicle");
      }
   }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
   Vehicle
}