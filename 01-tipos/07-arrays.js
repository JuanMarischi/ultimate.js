let animales = ['chanchito', 'caballo']; //array de string

console.log (animales);
console.log (animales[0]);
animales[2] = 'dragon';
console.log(animales);

animales[10] = 'pez';
console.log (animales[7]);
console.log (typeof animales);
console.log (animales.length);//para ver el total

const amigosDelPokemon=["Pepito","pirula","manuela"]

let pokemon1 = {
    nombre:"pikachu",
    anime: "pokemon",
    tipo: "electrico",
};
let pokemon2 = {
    nombre:"Evee",
    anime: "pokemon",
    tipo: "tierra",
};
let pokemon3 = {
    nombre:"Charmander",
    anime: "pokemon",
    tipo: "fuego", 
    amigos:amigosDelPokemon
};

let pokemones = [pokemon1, pokemon2, pokemon3]; //Array de objeto

const pokemon4 = []

pokemon4.push(pokemon1);
console.log(pokemon4);

console.log(pokemon1, pokemon2, pokemon3);

console.log(pokemones[2].amigos);// para acceder al array usar [] y para objeto el .

//combinamos array con objeto

pokemones.forEach(elemento =>{
    console.log(elemento.nombre)
})