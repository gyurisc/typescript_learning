class Vehicle {
    public drive(): void {
        console.log('driving');
    }

    public honk(): void {
        console.log('honking');
    }
}

class Car extends Vehicle {
    public drive(): void {
        console.log('driving car');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();