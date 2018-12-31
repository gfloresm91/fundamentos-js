// Class in javascript are prototype
class Person {
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
class Developer extends Person {
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

var gabriel = new Person('Gabriel', 'Flores', 1.60)
var maria = new Person('Maria', 'Sepulveda', 1.89)
var pablo = new Person('Pablo', 'Herrera', 1.72)

gabriel.greet(responseGreet)
maria.greet(responseGreet)
pablo.greet(responseGreet)

var angelica = new Developer('Angelica', 'Gutierrez', 1.60)

angelica.greet(responseGreet)