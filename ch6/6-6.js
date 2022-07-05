class Person {
  #lastName;
  #firstName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
}

let defaultOwner = new Person('마틴', '파울러');

export function getDefaultOwner() {
  return defaultOwner;
}
