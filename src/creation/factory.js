class ToyFactory {
  constructor() {
    this.toyClass = DuckToy;
  }
  makeToy({ type, ...rest }) {
    if (type === "car") {
      this.toyClass = CarToy
    } else {
      this.toyClass = DuckToy
    }

    return new this.toyClass(rest)
  }
} 

class DuckToy {
  constructor({ name, price }) {
    this.name = name;
    this.price = price;
  }
}

class CarToy {
  constructor({ name, price, color }) {
    this.name = name;
    this.price = price;
    this.color = color;
  }
}

const factory = new ToyFactory();
const car = factory.makeToy({ type: "car", name: "car 1", price: 20, color: "red" });
const duck = factory.makeToy({ name: "car 1", price: 20 });

console.log({ car, duck })
