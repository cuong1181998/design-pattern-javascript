class Inventory {
  constructor() {
    this.totalShampoo = 20;
    this.totalConditioner = 20;
    this.totalHairSerum = 1000;
  }

  checkInventory(type, amount) {
    let isAvailable = true;
    if (type === "shampoo" && this.totalShampoo < amount) {
      isAvailable = false;
    } else if (type === "conditioner" && this.totalConditioner < amount) {
      isAvailable = false;
    } else if (type === "hair serum" && this.totalHairSerum < amount) {
      isAvailable = false;
    }
    return isAvailable;
  }
}

class BuyingProduct extends Inventory {
  buyProduct(product) {
    let order;
    if(this.checkInventory(product)){
      order = new BuyProduct()
    }else{
      order = new PreOrderProduct()
    }
    return order.showDetails(product)
}

}

class BuyProduct{
  showDetails(product){
    console.log(`${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`)
  }
}

class PreOrderProduct{
  showDetails(product){
    console.log(`${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`)
  }
}

const customer = new BuyingProduct()
customer.buyProduct({productName: "shampoo", amount : 2})
customer.buyProduct({productName: "hair serum", amount : 2000})