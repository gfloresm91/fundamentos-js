// Class in javascript are prototype
class Person {
    constructor(name, lastname, height)
    {
        this.name = name
        this.lastname = lastname
        this.height = height
    }

    greet()
    {
        console.log(`Hola, me llamo ${this.name} ${this.lastname}`)
    }
    
    isTall()
    {
        return this.height > 1.80
    }
}

var gabriel = new Person('Gabriel', 'Flores', 1.60)
var maria = new Person('Maria', 'Sepulveda', 1.89)
var pablo = new Person('Pablo', 'Herrera', 1.72)

gabriel.greet()
maria.greet()
pablo.greet()

// Herencia
class Developer extends Person {
    constructor(name, lastname, height)
    {
        super(name, lastname, height)
    }

    greet()
    {
        console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador(a)`)
    }
}

var angelica = new Developer('Angelica', 'Gutierrez', 1.60)

angelica.greet()