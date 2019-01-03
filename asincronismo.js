// Class in javascript are prototype
console.log('\n\n')
console.log('###########################################')
console.log('Conceptos básicos: Funciones como parámetro')
console.log('###########################################\n\n')
class People {
    constructor(name, lastname, height)
    {
        this.name = name
        this.lastname = lastname
        this.height = height
    }

    // function as parameter
    greet(fn)
    {
        console.log(`Hola, me llamo ${this.name} ${this.lastname}`)

        if (fn) {
            responseGreet(this.name, this.lastname, false)
        }
    }
    
    isTall()
    {
        return this.height > 1.80
    }
}

// Herencia
class Developer2 extends People {
    constructor(name, lastname, height)
    {
        super(name, lastname, height)
    }

    // function as parameter
    greet(fn)
    {
        console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador(a)`)
        
        if (fn) {
            responseGreet(this.name, this.lastname, true)
        }
    }
}

function responseGreet (name, lastname, isDev)
{
    console.log(`Hola ${name} ${lastname}`)

    if (isDev) {
        console.log(`He validado que eres desarrollador(a)`)        
    }
}

var gabriel = new People('Gabriel', 'Flores', 1.60)
var maria = new People('Maria', 'Sepulveda', 1.89)
var pablo = new People('Pablo', 'Herrera', 1.72)

gabriel.greet(responseGreet)
maria.greet(responseGreet)
pablo.greet(responseGreet)

var angelica = new Developer2('Angelica', 'Gutierrez', 1.60)

angelica.greet(responseGreet)

// wait time with setTimeout
console.log('\n\n')
console.log('###########################################')
console.log('Conceptos básicos: setTimeout')
console.log('###########################################\n\n')
console.log('Primero')
setTimeout(() => console.log('Segundo, pero se ejecutará al último, después de dos segundos'), 2000);
console.log('Tercero')

console.log('\n\n')
console.log('#####################################################')
console.log('Conceptos básicos: Callbacks, promesas y asincronismo')
console.log('#####################################################\n\n')
// Callbacks with jquery
const URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

function getCharacter(id)
{
    // Promise
    return new Promise((resolve, reject) => {
        const url = `${URL}${PEOPLE_URL.replace(':id',id)}`

        $.get(url, options, function (data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError (id)
{
    console.log(`Ha ocurrido un error al obtener al personaje ${id}`)
}

// Promises one to one
// getCharacter(1)
//             .then(character => {
//                 console.log(`Hola, yo soy ${character.name}`)
//                 return getCharacter(2)
//             })
//             .then(character => {
//                 console.log(`Hola, yo soy ${character.name}`)
//             })
//             .catch(onError)

// Array of promises
// var ids = [1, 2, 3, 4, 5]

// var promises = ids.map(id => getCharacter(id))

// Promise
//        .all(promises)
//        .then(character => console.log(character))
//        .catch(onError) 

// Promises async
async function getCharacters()
{
    var ids = [1, 2, 3, 4, 5]
    var promises = ids.map(id => getCharacter(id))

    try {
        var characters = await Promise.all(promises)
        console.log(characters)
    } catch (id) {
        onError(id)
    }
} 

getCharacters()