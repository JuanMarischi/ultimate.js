/*const jugadores = [
    "Panaro",
    "Fernandez",
    "Torres",
    "Silva Torrejon",
    "Messi",
    "Merentiel",
    "Insfran",
    "Paredes"
]

const jugadoresTransformados = []

for (let index = 0; index < jugadores.length; index++) {
    const element = jugadores[index];
    const textoAsumar = "soy el jugador";
    const jugadoresTr = textoAsumar +" "+ element
    jugadoresTransformados.push(jugadoresTr) 
}

console.log (jugadoresTransformados)*/

const { useContext } = require("react");



/*const productos = [
    "Platos",
    "PC",
    "Vasos",
    "Cubiertos",
    "Manteles"
]

const nombresdeproductos = []

const totaldeproductos = productos.length

for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    const textoAsumar = "producto:"
    const nombresdePr = textoAsumar+ " " + element
    console.log (nombresdePr);
    if(index===totaldeproductos-1){
       console.log(totaldeproductos) 
    }
    
}

// palabra reservada + nombre + operador de asignacion (=) + valor

//console.log(totaldeproductos)*/

const numeros = [
    1,
    2,
    3,
    4,
    5

]

let valoracumulado = 0
  for (let index = 0; index < numeros.length; index++) {
        const element = numeros[index];
        valoracumulado += element 
        console.log(valoracumulado)
        
    }

   // ejercicio numeros pares

   const numeros=[1,2,3,4,5,6,7,8,9,10]
  
   
   for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index]; // un for es un bucle
    let esPar = element % 2 === 0; //modulo
   
if (esPar) {
    console.log('este numero es par:' + element) // IF (SI ES)
} else{
    console.log('este numero es impar:' + element) //ELSE (SI NO ES)
}

   }

   let nombres= ["juan", "pedro", "lucas", "pedro"];

 for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    
    if (element=== "pedro") {
        console.log("encontre a pedro");
    } else {
       console.log("no es pedro"+ element) 
    }
 }

 let nombres = ["Juan", "Pedro", "Lucas", "Pedro"];

for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];

    if (element === "Pedro") {
        console.log("encontré a pedro");
    } else {
        console.log("no es pedro " ++ element);
    }
}

let usuarios=["admin","juan","maria","admin","lucas"]

for (let index = 0; index < usuarios.length; index++) {
    const element = usuarios[index];

    if (element==="admin") {
        console.log("acceso total")
    } else {
        console.log("acceso limitado para "+ element);
    }
    
}

let usuarios = ["admin", "juan", "admin", "maria", "lucas", "admin"];

let contador= 0;

for (let index = 0; index < usuarios.length; index++) {
    const element = usuarios[index];
    
    if (element==="admin") {
        contador++;
        console.log("usuario admin")
        
    }  else {

        console.log("usuario normal "+ element)
        
    }
}
  console.log("cantidad de admin",contador)