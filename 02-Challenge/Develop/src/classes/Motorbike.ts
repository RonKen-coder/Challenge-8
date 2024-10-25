// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];


  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Check if the wheels array has 2 elements, if not, create 2 new default Wheel objects
      this.wheels = [
        new Wheel(17, 'Default'),
        new Wheel(17, 'Default'),
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }


  // TODO: Override the printDetails method from the Vehicle class
  printDetails(): void {
    super.printDetails();
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.diameter} inch ${wheel.brand}`).join(', ')}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
