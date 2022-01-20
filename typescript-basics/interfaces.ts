interface Reportable {
    summary(): string;
}

const oldCivic  = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() : string {
        return `Name: ${this.name}`;
    } 
}; 


const drink2 = {
    color: 'brown',
    carbonated: true, 
    sugar: 40, 
    summary(): string {
        return `Drink is ${this.color} with ${this.sugar} sugare and is ${this.carbonated ? 'fizzy' : 'still'}`; 
    }
}
const printSummary = (item: Reportable) => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink2);