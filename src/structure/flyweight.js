class Dress{
  constructor(serialNumber,type,color,designer,availability){
    this.serialNumber = serialNumber
    this.type = type
    this.color = color
    this.designer = designer
    this.availability = availability
    this.price = 0

  }
  dressPrice() {
    let price = 0;
    switch (this.type) {
      case "maxi":
        price = 1000
        break;
      case "gown":
        price = 2000
        break;
      case "skirt":
        price = 1000
        break;
    }

    this.price = price;
    console.log(this.price)
    return this.price
  }
}

class DressFactory {
  constructor() {
    this.dressMap = new Map()
  }
  
  createDress(serialNumber,type,color,designer,availability) {
    if (this.dressMap.has(serialNumber)) {
      return this.dressMap.get(serialNumber)
    } 

    const newDress = new Dress(serialNumber,type,color,designer,availability)
    this.dressMap.set(serialNumber, newDress);
    return newDress;
  }
}

const dressFactory = new DressFactory()
const dress1 = dressFactory.createDress("#123", "skirt", "pink", "Zara", "yes");
const dress2 = dressFactory.createDress("#123", "skirt", "pink", "Zara", "yes");

console.log(dress1 === dress2)