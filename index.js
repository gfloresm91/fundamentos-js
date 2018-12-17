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
    age: 27
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