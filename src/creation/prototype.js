class Ninja {
  constructor(name) {
    this.name = name;
    this.points = 100;
  }

  punch(otherNinja) {
    if(otherNinja.points > 0 && this.points > 0){
      otherNinja.points -= 20
      console.log(`${otherNinja.name}'s points are ${otherNinja.points}`) 
    }else{
      console.log(`Can't punch ${otherNinja.name}`) 
    }
  }

  kick(otherNinja) {
    if(otherNinja.points > 0 && this.points > 0){
      otherNinja.points -= 50
      console.log(`${otherNinja.name}'s points are ${otherNinja.points}`) 
    }else{
      console.log(`Can't kick ${otherNinja.name}`)
    }
  }
}

const ninja1 = new Ninja('Ninja1')
const ninja2 = new Ninja('Ninja2')

ninja1.kick(ninja2)
ninja2.punch(ninja1)
ninja1.kick(ninja2) 
ninja1.punch(ninja2) 
ninja2.kick(ninja1)