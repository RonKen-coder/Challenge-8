// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(); // Ensure to pass necessary parameters to the Vehicle constructor if needed
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    // Initialize wheels array
    this.wheels = wheels.length === 4 ? wheels : [
      new Wheel(20, 'Default'),
      new Wheel(20, 'Default'),
      new Wheel(20, 'Default'),
      new Wheel(20, 'Default'),
    ];
    
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const { make, model, weight } = vehicle;
    if (weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}...`);
    } else {
      console.log(`${make} ${model} is too heavy to be towed.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Ensure this method exists in the Vehicle class
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.diameter} inch ${wheel.tireBrand}`).join(', ')}`);
  }
}

// Export the Truck class as the default export
export default Truck;