const pokemones = [
    {
        nombre: "charmander",
        tipo: "fuego",
        poder: "lanzallamas"
    },
    {
        nombre: "squirtle",
        tipo: "agua",
        poder: "pistola agua"
    },
    {
        nombre: "bulbasaur",
        tipo: "planta",
        poder: "latigazo cepa"
    },
    {
        nombre: "pikachu",
        tipo: "electrico",
        poder: "impactrueno"
    },
    {
        nombre: "jigglypuff",
        tipo: "normal",
        poder: "canto"
    },
    {
        nombre: "meowth",
        tipo: "normal",
        poder: "arañazo"
    },
    {
        nombre: "psyduck",
        tipo: "agua",
        poder: "confusión"
    }
];


function filtrarPokemones(tipoEscrito) { //cuando es una accion repetitiva
    const filtrado = pokemones.filter(element =>
        element.tipo === tipoEscrito
    )

    if(filtrado){
 return filtrado;
    }else{
        console.log(filtrado)
        return 'No se encontró ningun Pokemon'
    }
   
}

const filtramos = filtrarPokemones('cualquiercosa')

console.log(filtramos);

