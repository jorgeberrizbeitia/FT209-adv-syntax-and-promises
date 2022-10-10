console.log("probando")


// SYNTAXIS REDUCIDA

// forma reducida de escribir una funcion de una sola linea de codigo

// const sayHello = (name) => {
//   return `Hola ${name}`
// }

const sayHello = (name) => `Hola ${name}` // me quedo con esta
// const sayHello = name => `Hola ${name}` // cuando hay un solo argumento


console.log( sayHello("Iñigo") )
console.log( sayHello("Caro") )


const oneArr = [2, true, "hola", 4637]

// const filteredArr = oneArr.filter((eachElem) => {
//   return typeof eachElem === "number"
// })

const filteredArr = oneArr.filter((eachElem) => typeof eachElem === "number")

console.log(filteredArr)


let peopleArr = ["Helena", "Nacho", "Raquel", "Raul", "Ivan"]

// quiero solo los nombres que empiecen por R y todo en mayuscula


// encadenando metodos
let newArr = peopleArr.filter((eachPerson) => eachPerson[0] === "R").map((eachPerson) => eachPerson.toUpperCase())


// let newArr = peopleArr
// .filter((eachPerson) => eachPerson[0] === "R")
// .map((eachPerson) => eachPerson.toUpperCase())


console.log(newArr)



// REDUCCION DE SYNTAXIS AL CREAR OBJETOS


let name = "Jorge"
let age = 33


// let person = {
//   name: name,
//   age: age
// }

// cuando el nombre de la propiedad es el mismo que la variable de donde viene el valor

let person = {
  name,
  age,
  hobby: "videojuegos"
}

// let person = { name, age }


console.log(person)




// DESTRUCTURACION

let oneDog = {
  nombre: "Phantom",
  breed: "Mestizo",
  edad: 10
}

// extraer las propiedades para utilizarlas como variables simples

let { nombre, breed, edad } = oneDog // nombre, breed y edad ahora serán variables
// let nombre = "Phantom"
// let breed = "Mestizo"
// let edad = 10
console.log(nombre, breed, edad)

console.log( `${nombre} es un perro de raza ${breed} y tiene ${edad} añitos de edad` )

console.log( `${nombre} es el mejor perrito ${breed} del mundo` )

// 1. destructuración es una reduccion syntaxica opcional. No es una funcionalidad.
// 2. No muta el objeto original, solo crea variables con los valores


const describeDog = ({nombre, breed, edad}) => {
  // let { nombre, breed, edad } = perrito
  console.log( `${nombre} es un perro de raza ${breed} y tiene ${edad} añitos de edad` )
}

describeDog(oneDog)



// destructuracion en arrays

const myFavouriteBooksEver = ["MundoDisco", "Señor de los Anillos", "Juego de Tronos", "Dragonlance", "Harry Potter"]

const [book1, book2, book3, book4, book5, book6 = "No libro", book7] = myFavouriteBooksEver
// cuando destructuramos de array, nosotros asignamos los nombres de las variables
console.log(book6, book7)

// console.log(`mis libros favoritos son: ${myFavouriteBooksEver[0]}, ${myFavouriteBooksEver[1]}, ${myFavouriteBooksEver[2]}, ${myFavouriteBooksEver[3]} y ${myFavouriteBooksEver[4]}`)

console.log(`mis libros favoritos son: ${book1}, ${book2}, ${book3}, ${book4} y ${book5}`)


// destructuracion compleja

let personObj = {
  firstName: "Bob",
  oneAge: 32,
  other: {
    about: {
      favColor: "Azul",
      hobbies: ["Bailar", "Leer"]
    }
  }
}

let color = personObj.other.about.favColor
console.log(color)

// destructuración anidada
let { firstName, oneAge, other: { about: { favColor } } } = personObj
// let favColor = personObj.other.about.favColor
console.log(favColor)

let { other: { about: { hobbies: [, hobby2] } } } = personObj
console.log(hobby2)