const profile = {
    name: 'John',
    age: 30,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age } = profile;