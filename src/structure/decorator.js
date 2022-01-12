class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

SuperHeroWithSword = (hero) => {
  hero.sword = true;
  console.log(`${hero.name}'s power is ${hero.power}, and he also has a sword now.`)
}

SuperHeroWithSuperSpeed = (hero) => {
  hero.superSpeed = true;
  console.log(`${hero.name}'s power is ${hero.power}, and he also has the super speed now.`)
}

SuperHeroWithSpeedAndSword = (hero) => {
  hero.speedAndSword = true
  console.log(`${hero.name}'s power is ${hero.power}, and he also has both super speed and a sword now.`)
}

var superhero1 = new Hero("Fire Man", "Fire")
SuperHeroWithSword(superhero1)
SuperHeroWithSuperSpeed(superhero1)
var superhero2 = new Hero("Ice Man", "Ice")
SuperHeroWithSpeedAndSword(superhero2)