export default class Conso {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.date = new Date();
    this.id = Date.now();
    this.formatedDate = this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear();
  }

  get() {
    return {
      name: this.name,
      cost: this.cost,
      date: this.date,
    };
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }

  getDate() {
    return this.date;
  }
}
