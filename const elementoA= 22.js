const elementoA= 22
const elementoB=10

const totalelementos= elementoA + elementoB

console.log(totalelementos);

let nombres=["Juan","Julian"]

for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    
    console.log("Hola" + element)
    
}


let nombres = ["Juan", "Julian", "Eze", "Tati", "Ivi"];

for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];

    if (element === "Juan") {
        console.log("Hola Juan, sos admin");
    } else {
        console.log("Hola " + element);
    }
}