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
    wheels?: Wheel[] // Made wheels optional
  ) {
    super(); // Call the constructor of the parent class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 2 elements, if not, create 2 new default Wheel objects
    this.wheels = wheels && wheels.length === 2
      ? wheels
      : [new Wheel(17, 'Default'), new Wheel(17, 'Default')]; // Assign default wheels if wheels array is not provided or has less than 2 elements
  }
  // TODO: Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.diameter} inch ${wheel.getTireBrand}`).join(', ')}`);
  }

  // Method to check if the speed exceeds the top speed limit of the motorbike
  checkSpeedLimit(speed: number): string {
    if (speed > this.topSpeed) {
      return 'Warning: Speed exceeds the motorbike’s top speed limit!';
    } else {
      return 'Speed is within the safe limit.';
    }
  }
}

// Export the Motorbike class as the default export
export default Motorbike;