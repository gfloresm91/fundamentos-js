var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Flores',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var people = [
        gabriel, 
        alan,
        martin,
        dario,
        vicky,
        paula
    ]

// Filters in arrays
console.log('\n\n')
console.log('##########################')
console.log('Conceptos básicos: Arrays')
console.log('##########################\n\n')

const isTall = ( { altura } ) => altura > 1.8

// This return a new object            
var peopleTall = people.filter(isTall)
console.log(`Filter: ${peopleTall}\n\n`)

// This is other form, same result, preview method is recomended
// var peopleTall = personas.filter(function (people){
//     return people => people.altura > 1.8
// })

// Transform arrays
// Pass height to cm
console.log('Transformando arrays con map\n\n')
const passHeightToCM = person => ({
    ...person,    
    altura : person.altura * 100
})

// This is same what
// const passHeightToCM = person => {
//     return {
//         ...person,    
//         altura : person.altura *= 100
//     }
// }

var personCms = people.map(passHeightToCM)
console.log(personCms)
console.log('\n\n')

// Reduce arrays
console.log('Reduce\n\n')
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalLibrary = people.reduce(reducer, 0)

console.log(`En total se tiene ${totalLibrary} libros`)