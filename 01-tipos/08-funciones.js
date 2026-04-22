function saludar() {
    console.log ('Gimnasia');
}
   
saludar();

function suma () {
    return 2 + 2;
}

//let resultado = suma ();
console.log(suma());

//EJEMPLO

const alumnos = [   // esto es un arrays de objeto
  {
    nombre: "Juan",
    edad: 25,
    curso: "Programación",
    notas: [8, 7, 9]
  },
  {
    nombre: "María",
    edad: 22,
    curso: "Actuacion",
    notas: [10, 9, 9]
  },
  {
    nombre: "Pedro",
    edad: 28,
    curso: "Periodismo",
    notas: [6, 7, 8]
  },
  {
    nombre: "Cokemones",
    edad: 15,
    curso: "Cocina",
    notas: [10, 7, 9]
  },
  {
    nombre: "Eze",
    edad: 18,
    curso: "Jardineria",
    notas: [5, 4, 3]
  }
];

function calcularPromedio(notas){

const nota1=notas[0]
const nota2=notas[1]
const nota3=notas[2]

const promedio= (nota1+nota2+nota3)/3;
return promedio

}

const notasPromedio = calcularPromedio (alumnos[2].notas)

console.log (notasPromedio);