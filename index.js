// Strings
console.log('##########################')
console.log('Conceptos básicos: Strings')
console.log('##########################\n\n')

function strings(name, lastname)
{
    var nameToUpper = name.toUpperCase()
    console.log(`String a mayúsculas: ${nameToUpper}`)

    var lastnameToLower = lastname.toLowerCase()
    console.log(`String a minúsculas: ${lastnameToLower}`)

    var firstLetterOfTheName = name.charAt(0)
    console.log(`Primera letra del string: ${firstLetterOfTheName}`)

    var numberOfLetterOfTheName = name.length
    console.log(`Length: ${numberOfLetterOfTheName}`)

    // Interpolation of variables
    var fullName = `${name} ${lastname.toUpperCase()}`
    console.log(`Interpolación: ${fullName}`)

    // from char 1 to 2 = print ab
    var substring = name.substr(1, 2)
    console.log(`SubString: ${substring}`)

}

strings('Gabriel', 'Flores')

//Numbers
console.log('\n\n')
console.log('##########################')
console.log('Conceptos básicos: Números')
console.log('##########################\n\n')

function numbers()
{
    var age = 27
    console.log(`Esta es la edad con la que se va a trabajar: ${age}`)
    
    age += 1
    console.log(`Edad más uno: ${age}`)

    age -= 1
    console.log(`Edad menos uno: ${age}`)

    var year = 1
    console.log(`Cantidad de años: ${year}`)

    age += year
    console.log(`Edad más año: ${age}`)

    var winePrice = 200.3
    console.log(`Precio del vino: ${winePrice}`)

    // Round total price to one decimal
    var total = Math.round(winePrice * 100 *3) / 100
    console.log(`Redondear a un decimal: ${total}`)

    // Show more decimals (two), this convert to string
    var totalFix = total.toFixed(2)
    console.log(`Redondear a dos decimales: ${totalFix}`)

    // Convert to float totalFix
    var totalFloat = parseFloat(totalFix)
    console.log(`Convertir a flotante: ${totalFloat}`)

    var pizza = 8
    var people = 2

    var portionsPerPerson = pizza / people
    console.log(`8 trozos de pizza dividido 2: ${portionsPerPerson}`)
}

numbers()

// Funciones
console.log('\n\n')
console.log('############################')
console.log('Conceptos básicos: Funciones')
console.log('############################\n\n')

function printAge (name, age)
{
    console.log(`${name} tiene ${age} años`)
}

printAge('Gabriel', 28)

// Objects
console.log('\n\n')
console.log('##########################')
console.log('Conceptos básicos: Objetos')
console.log('##########################\n\n')

var gabriel = {
    name: 'Gabriel',
    lastname: 'Flores',
    age: 27,
    weight: 80,
    ingeniero: true,
    dj: false,
    geek: true
}

function printNameInUpper({ name })
{
    console.log('El nombre del objeto es: ' + name.toUpperCase())
}

printNameInUpper(gabriel)
printNameInUpper({ name: 'María' })

printNameAndAge(gabriel)

function printNameAndAge(person)
{
    var { name, age } = person

    console.log(`Hola me llamo ${ name } y tengo ${ age } años`)
}

function birthday(person)
{
    return {
        ...person,
        age: person.age + 1
    }
}

console.log('Sobre escribiendo un objeto:')
var birthdayGabriel = birthday(gabriel)
console.log(birthdayGabriel)


// Conditional
console.log('\n\n')
console.log('################################')
console.log('Conceptos básicos: Condicionales')
console.log('################################\n\n')

function conditionals()
{
    var x= 4 , y ='4'

    // If you compare this with == expresion, result is true
    console.log(`Si X=4 e Y=4 entonces: ${x == y}`)

    // But you compare this with ===, result is false,because type is distint
    // This expresion is recomended
    console.log(`Si X es número e Y es string: ${x === y}`)

    // For objects is same
    var obj1 = {
        name: 'Gabriel'
    }

    var obj2 = {
        name: 'Gabriel'
    }

    // Whit == or === expresion, result is false
    console.log(`Lo mismo si comparo obj1 con obj2: ${obj1 == obj2}`)

    // But if set obj1 in obj2, result is true, same memory space
    var obj3 = obj1
    console.log(`En cambio si asigno obj1 a obj3: ${obj1 === obj3}`)
}

conditionals()

// Conditional in objects
console.log('\n\n')
console.log('###########################################')
console.log('Conceptos básicos: Condicionales en objetos')
console.log('###########################################\n\n')

function printProfessions(person){
    console.log(`${ person.name }:`)

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

printProfessions(gabriel)

// Arrow functions
console.log('\n\n')
console.log('##################################')
console.log('Conceptos básicos: Arrow functions')
console.log('##################################\n\n')
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
console.log('\n\n')
console.log('#########################')
console.log('Conceptos básicos: Ciclos')
console.log('#########################\n\n')

function forcycle(gabriel)
{
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
}

forcycle(gabriel)

function switchcycle()
{
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
}

switchcycle()