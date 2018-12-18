// Strings
var name = 'Gabriel', lastname = 'Flores'

var nameToUpper = name.toUpperCase()
var lastnameToLower = lastname.toLowerCase()

var firstLetterOfTheName = name.charAt(0)
var numberOfLetterOfTheName = name.length

// Interpolation of variables
var fullName = `${name} ${lastname.toUpperCase()}`

// from char 1 to 2 = print ab
var substring = name.substr(1, 2)


// Numbers
var age = 27

age += 1

age -= 1

var year = 1

age += year

var winePrice = 200.3

// Round total price to one decimal
var total = Math.round(winePrice * 100 *3) / 100
// Show more decimals (two), this convert to string
var totalFix = total.toFixed(2)
// Convert to float totalFix
var totalFloat = parseFloat(totalFix)

var pizza = 8
var people = 2

var portionsPerPerson = pizza / people

// Functions
printAge(name, age)

function printAge (name, age)
{
    console.log(`${name} tiene ${age} años`)
}

// Objects
var gabriel = {
    name: 'Gabriel',
    lastname: 'Flores',
    age: 27,
    weight: 80,
    ingeniero: true,
    dj: false,
    geek: true
}

printNameInUpper(gabriel)
printNameInUpper({ name: 'María' })

function printNameInUpper({ name })
{
    console.log('El nombre del objeto es: ' + name.toUpperCase())
}

printNameAndAge(gabriel)

function printNameAndAge(person)
{
    var { name, age } = person

    console.log(`Hola me llamo ${ name } y tengo ${ age } años`)
}

var birthdayGabriel = birthday(gabriel)
console.log(birthdayGabriel)

function birthday(person)
{
    return {
        ...person,
        age: person.age + 1
    }
}

// Conditional
var x= 4 , y ='4'

// If you compare this with == expresion, result is true
console.log(x == y)

// But you compare this with ===, result is false,because type is distint
// This expresion is recomended
console.log(x === y)

// For objects is same
var obj1 = {
    name: 'Gabriel'
}

var obj2 = {
    name: 'Gabriel'
}

// Whit == or === expresion, result is false
console.log(obj1 == obj2)

// But if set obj1 in obj2, result is true, same memory space
var obj3 = obj1
console.log(obj1 === obj3)

printProfessions(gabriel)

function printProfessions(person){
    console.log(`${ person.name } es:`)

    if(person.ingeniero)
    {
        console.log(`Es ingeniero`)
    }
    else
    {
        console.log(`No es ingeniero`)
    }

    if(person.dj)
    {
        console.log(`Es DJ`)
    }
    else
    {
        console.log(`No es DJ`)
    }

    if(person.geek)
    {
        console.log(`Es geek`)
    }
    else
    {
        console.log(`No es geek`)
    }
}

// Arrow functions
const ADULT_AGE = 18

//this is same what
// function isAdult(person)
// {
//     return person.age >= ADULT_AGE
// }
const IS_ADULT = ({ age }) => age >= ADULT_AGE

printIsAdult(gabriel)

function printIsAdult(person)
{
    if(IS_ADULT(person))
    {
        console.log(`${ person.name } es mayor de edad`)
    }
    else
    {
        console.log(`${ person.name } es menor de edad`)
    }
}

allowAccess(gabriel)

function allowAccess(person)
{
    if(!IS_ADULT(person))
        console.log('Acceso denegado')
    else
        console.log('Acceso autorizado')
}

// Cycles
console.log(`Al inicio del año ${gabriel.name} pesa ${gabriel.weight} Kg.`)

const INCREMENT_WEIGHT = 0.2

const gainWeight = person => person.weight += INCREMENT_WEIGHT
const loseWeight = person => person.weight -= INCREMENT_WEIGHT

for (let i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        var ganepeso = gainWeight(gabriel)
    }
    else if (random < 0.5) {
        loseWeight(gabriel)
    }
}

console.log(`Al final del año ${gabriel.name} pesa ${gabriel.weight.toFixed(1)} Kg.`)

let signo = prompt('Favor ingresa tu signo')

signo = signo.toLowerCase()

switch (signo) {
    case 'acuario':
        console.log('Ha elegido acuario')
    break
    
    case 'piscis':
        console.log('Ha elegido piscis')
    break
    
    case 'sagitario':
        console.log('Ha elegido sagitario')
    break

    default:
        console.log('Ha elegido un signo no documentado')
    break
}