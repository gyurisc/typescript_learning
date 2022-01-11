interface Reportable {
    summary(): string;
}

const oldCivic : Reportable = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() : string {
        return `Name: ${this.name}`;
    } 
}; 


const printSummary = (item: Reportable) => {
    console.log(item.summary());
}

printSummary(oldCivic);