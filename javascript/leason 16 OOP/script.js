class Car {
  constructor(brand, model, engine, price) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
  }
  turnOn() {
    return alert("vrom vrom");
  }
  getPrice() {
    let additionalPrice = 0;
    if (this.engine === "Electric") {
      additionalPrice + 10000 + this.basePrice;
    } else if (this.engine === "diesel") {
      additionalPrice + 5000 + this.basePrice;
    } else {
      return this.basePrice + additionalPrice;
    }
  }
}
const audi = new Car("audi", "a3", "Electric", 40000);
const vw = new Car("vw", "passat", "diesel", 50000);
console.log(vw.getPrice());
