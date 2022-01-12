class Vehicle {
    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('honking');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('driving car');
    }

    public startDriving(): void {
        this.drive();
        this.honk();
    }
}

const vv = new Vehicle('orange');
console.log(vv.color);

const car = new Car('green');
car.startDriving();
