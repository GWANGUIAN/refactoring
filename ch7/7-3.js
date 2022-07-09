export class Order {
  constructor(data) {
    this.priority = new Priority(data.priority);
  }

  isHighPriority() {
    return this.priority.higerThan( new Priority('normal'));
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higerThan(other) {
    return this.index > other.index;
  }

  lowerThan(other) {
    return this.index < other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount)
