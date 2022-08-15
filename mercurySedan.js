//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Car extends VehicleModule.Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
      if (num + this.passenger <= this.maximumPassengers) {
        this.passenger += num;
        this.availableRoom = true;
        return this.passenger;
      } else {
        console.log(
          this.make +
            " " +
            this.model +
            " only has room for " +
            `${this.maximumPassengers - this.passenger}` +
            " more people!"
        );
        this.availableRoom = false;
      }
    } else {
      console.log(this.make + " " + this.model + " has no available seats!");
      this.availableRoom = false;
    }
  }

  start() {
    if (this.fuel > 0) {
      this.start = true;
      console.log("Vehicle has started!");
    } else {
      console.log("Vehicle is out of fuel!");
    }
  }

  serviceNeeded(mileage) {
    if (mileage > 30000) {
      this.scheduleService = true;
      console.log("The vehicle needs service!")
      return this.scheduleService;
    }
  }
}

let myRide = new Car("GMC", "Sierra AT4", 2020, "Black", 5382);
myRide.loadPassenger(6);
myRide.start();
myRide.serviceNeeded(31599);
