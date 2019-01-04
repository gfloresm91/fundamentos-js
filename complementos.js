console.log('\n\n')
console.log('###################################')
console.log('Conceptos básicos: var, let y const')
console.log('###################################\n\n')

for (var i = 0; i < 3; i++) {
    var num = i
}

console.log(`Con var se puede acceder desde fuera del for: ${num}`)
console.log('Se recomienda usar let en vez de var')
console.log('Con let la variable solo existe dentro del for')

// for (let i = 0; i < 3; i++) {
//     let numlet = i
// }

// console.log('Con let la variable solo existe dentro del for:')
// console.log(numlet)

for (let i = 0; i < 3; i++) {
    const numconst = i
}

console.log('Se recomienda usar const en vez de var')
console.log('Tiene el mismo alcance de let')

console.log('\n\n')
console.log('########################')
console.log('Conceptos básicos: dates')
console.log('########################\n\n')

function daysBetweenDates(fechainicio, fechafin) 
{
    const oneDay = 1000 * 60 * 60 * 24
    
    // This get the positive value independ of order
    const difference = Math.abs(fechainicio - fechafin)

    return Math.floor((difference / oneDay) /365)
}

const today = new Date()

// Months in javascript start with 0 to 11, 0 is january and 11 is December
const birthday2 = new Date(1991, 0, 21)

console.log(daysBetweenDates(today, birthday2))

console.log('\n\n')
console.log('######################################')
console.log('Conceptos básicos: Recursive functions')
console.log('######################################\n\n')

/*
13 / 4

13 - 4 = 9    1
9 - 4 = 5     1
5 - 4 = 1     1
1 - 4 = -3    0
*/

function division(dividendo, divisor)
{
    if (dividendo < divisor) {
        return 0
    }

    return 1 + division(dividendo - divisor, divisor)
}

console.log(division(13, 4))

console.log('\n\n')
console.log('###############################')
console.log('Conceptos básicos: Memorización')
console.log('###############################\n\n')

/*
!6 = 6 * 5 * 4 * 3 * 2 * 1
!8 = 8 * 7 * !6 
*/

function factorial(numero)
{
    if(!this.cache)
        this.cache = {}

    if(this.cache[numero])
        return this.cache[numero]

    if(numero === 1)
        return 1

    this.cache[numero] = numero * factorial(numero - 1)
    return this.cache[numero]
}

console.log(factorial(6))

console.log('\n\n')
console.log('#########################################')
console.log('Conceptos básicos: Closures de javascript')
console.log('#########################################\n\n')

function createGreet(endSentence)
{
    return function (name)
    {
        console.log(`Hola ${name} ${endSentence}`)
    }
}

const argentinianGreet = createGreet('che')
const mexicanGreet = createGreet('wey')

argentinianGreet('Gabriel')
mexicanGreet('Gabriel')

console.log('\n\n')
console.log('################################################')
console.log('Conceptos básicos: Estructura de datos inmutable')
console.log('################################################\n\n')

const gabriel2 = {
    name: 'Gabriel',
    lastname: 'Flores',
    age: 27
}

// This modify the original object
const birthday3 = person => person.age++

// This dont modify original object
const inmutableBithday3 = person => ({
    ...person,
    age: person.age + 1
}) 

console.log(birthday3(gabriel2))
console.log(inmutableBithday3(gabriel2))

console.log('\n\n')
console.log('#######################')
console.log('Conceptos básicos: bind')
console.log('#######################\n\n')

function greetBind(greet = 'Hola')
{
    console.log(`${greet}, mi nombre es ${this.name}`)
}

const greetGabrielBind = greetBind.bind(gabriel2, 'Hi')

console.log(greetGabrielBind())

// Others forms
greetBind.call(gabriel2, 'Hi')
greetBind.apply(gabriel2, ['Hi'])