class Dog {
  constructor(public name: String) {
    
  }
  sayHello() : String {
    return `Hello, my name is ${this.name}`
  }

}

class Fish {
  constructor(public name : String) {
    
  }
  dive(howDeep: number): String {
    return `I can dive upto ${howDeep} meters`
  }
}

class Cat {
  constructor(public name: String) {
    this.name = name;
  }

  howl(): string {
    return `I do not howl as I am a cat!`
  }
}

type Pet = Dog | Fish;

//If the parameter is not of type 'PET"
function talkToPet(pet : Pet) : String | undefined {
  if(pet instanceof Dog) {
    return pet.sayHello()
  } else if (pet instanceof Fish) {
    return `Fish cannot talk, sorry!`
  }
}

let pet1 = new Dog('Tommy')
let pet2 = new Fish('Goldie')
let pet3 = new Cat('Jerry')

console.log(talkToPet(pet1))
console.log(talkToPet(pet2))

