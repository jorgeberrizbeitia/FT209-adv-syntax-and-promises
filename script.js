console.log("probando")
/* 

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
// let { firstName, oneAge, other: { about: { favColor } } } = personObj
// let favColor = personObj.other.about.favColor
// console.log(favColor)

let { other: { about: { hobbies: [, hobby2] } } } = personObj
console.log(hobby2)


// Actividad 1

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};



// 1. the student first and last name, 
let { name: {firstName, lastName} } = data
console.log(firstName, lastName)

// 2. favorite football club, 
let { favoriteFootballTeam } = data
console.log(favoriteFootballTeam)

// 3. as well as the city and the country this student is coming from.
let { hometown: { city, country } } = data
console.log(city, country)


// a: 
const [a, b] = [1];
console.log(a * b); // <== ??? NaN

// b:
const [c, d = 1] = [2];
console.log(c * d); // <== ??? 2

// b:
let [e, f = 2, g, h = 1] = [3, 4];
console.log(e, f, g, h); // ==> ??? 3 4 undefined 1



const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};

// destructure the object in the parameters itself
function getIngredients( { leaf, veggie, seed, nut, liquid } ) {
  return `To make the green smoothie,  you  should add: ${leaf},${veggie},${seed},${nut} and${liquid}.`;
}

// ensure you pass the object as a parameter while calling the function below
console.log( getIngredients( greenSmoothie ) )




// OPERADOR SPREAD ... (va a esparcir los elementos del array por separado)

let veggies = ["patata", "tomate", "banana"]

console.log(veggies)
console.log( ...veggies )
// console.log("patata", "tomate", "banana")

let num1 = 10;
let num2 = 20;

// 1. Hay metodos que lo usan para facilitarnos la vida

console.log( Math.max(num1, num2) )

let arrNum = [10, 20, 50, 3, 55]

console.log( Math.max(...arrNum) )

// 2. podemos crear arrays con elementos de otros

const students = ["Borja", "David", "Juvixa"]

const tas = ["Carolina", "Iñigo"]

const everyone = [...students, ...tas, "Curro", "Vicky"]
console.log(everyone)

// 3. para clonar arrays

let orderedNumbers = [1, 2, 3, 4, 5]

// DEEP CLONE
// structuredClone
// JSON.parse + JSON.stringify

// SHALLOW CLONE
let clone = [...orderedNumbers] // otra forma de clonar. 

console.log( clone.reverse() )
console.log( orderedNumbers )



let somePeople = [
  {
    name: "Jorge",
    candy: 40,
  }, // ref qwer
  {
    name: "Iñigo",
    candy: 50,
  }, // ref sdfg
  {
    name: "Carolina",
    candy: 45,
  }, // ref ghyt
] // ref 1234

// let copyPeople = [...somePeople] // ref 9876 // SHALLOW CLONE
let copyPeople = structuredClone(somePeople) // ref 9876, ref puoi, ref jfdj, ref ddkl // DEEP CLONE

copyPeople.shift()
console.log("clone", copyPeople)
console.log("original", somePeople)

copyPeople[0].candy = 0;  // ref sdfg

console.log("clone", copyPeople)
console.log("original", somePeople)


// OPERADOR REST (nos da el resto de los elementos)

const allHobbies = ["surfear", "escalar", "bailar", "cantar", "videojuegos"]

const [ firstHobby, ...patata ] = allHobbies

console.log(firstHobby)
console.log(patata) // el resto de los elementos no destructurados


const checkIfTen = (...numbers) => {
  // let numbers = [5, 5]
  // let numbers = [5, 9]
  // let numbers = [3, 4, 3]

  console.log(numbers)

  let sum = numbers.reduce((acc, eachElem) => acc + eachElem)

  if (sum === 10) {
    console.log("Si, es 10!")
  } else {
    console.log("no es 10")
  }
}


checkIfTen(5, 5)
checkIfTen(5, 9)
checkIfTen(3, 4, 3)




// ASINCRONIA EN JS


// esta funcion es asyncrona. (donde se envia la informacion)
function requestBook(index, callback, errorCallback) {
  // let index = 0;
  // let callback = referencia de getResponse
  const books = [
    "1. La comunidad del Anillo",
    "2. Las dos Torres",
    "3. El Retorno del Rey"
  ]
  // replicar un comportamiento asincrono (real de transmición de data)
  // tarda x cantidad de segundos enviar la informacion
  setTimeout(() => {
    // return books[index]
    
    if (books[index] === undefined) {
      errorCallback("No existe un libro con ese index")
    } else {
      callback(books[index])
    }

  }, Math.floor( Math.random() * 1000 ))

}

// const book = requestBook(0)
// console.log(book)

// forma 1. Callbacks
// donde se recibe la informacion

// function getResponse(response) {
//   console.log(`La respuesta es: ${response}`)
// }

// function errorReceiving(error) {
//   console.log(`Error en la respuesta`, error)
// }

//         indice, funcion a llamar cuando esté lista la data
// requestBook(6, getResponse, errorReceiving)
// pasamos una funcion para que se ejecute cuando se reciba la data
// pasamos una funcion para que se ejecute cuando haya un error


requestBook(0, (response) => {
  console.log(`Respuesta: `, response)

  requestBook(1, (response) => {
    console.log(`Respuesta: `, response)

    requestBook(2, (response) => {
      console.log(`Respuesta: `, response)

      requestBook(3, (response) => {
        console.log(`Respuesta: `, response)
      }, (error) => {
        console.log("Error", error)
      })

    }, (error) => {
      console.log("Error", error)
    })

  }, (error) => {
    console.log("Error", error)
  })

}, (error) => {
  console.log("Error", error)
})


*/

// ASINCRONIA EL JS CON PROMESAS

function requestBookPromise(index) {
  const books = [
    "1. La comunidad del Anillo",
    "2. Las dos Torres",
    "3. El Retorno del Rey"
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (books[index] === undefined) {
        reject("No existe un libro con ese index")
      } else {
        resolve(books[index])
      }
    }, Math.floor( Math.random() * 1000 ))
  })
}

let algo = requestBookPromise(0)
console.log(algo)

// como consumir una promesa

// then / catch

// ejemplo de documentacion
// la funcion se llama requestBookPromise 
// tienen que pasar un valor numerico
// el valor debe ser de 0 a 2

requestBookPromise(0)
.then((response) => {
  // solo se ejecuta cuando la promesa cambia de status a: Fullfilled (Success)
  console.log("response", response)

  // ENCADENAR PROMESAS
  return requestBookPromise(1)
})
.then((response) => {
  console.log("response", response)
  return requestBookPromise(2)
})
.then((response) => {
  console.log("response", response)
  return requestBookPromise(3)
})
.then((response) => {
  console.log("response", response)
})
.catch((error) => {
  // solo si hay un error en la promesa. Cambia de estatus a Rejected
  console.log("error", error)
})


// otra forma de resolver promesas

// async await

// la funcion debe ser de tipo asincrona
async function getBooks() {

  // que la funcion sea asincrona nos permite usar la palabra await
  try {
    // intenta hacer lo siguiente
    let response = await requestBookPromise(0)
    // await va a esperar que se resuelva la promera y guardará el valor retornado en la variable
    console.log("response", response)
    let response2 = await requestBookPromise(1)
    console.log("response2", response2)
    let response3 = await requestBookPromise(2)
    console.log("response3", response3)
  }
  catch (error) {
    console.log("error", error)
  }
}

getBooks()