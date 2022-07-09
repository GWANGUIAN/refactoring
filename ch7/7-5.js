class TelephoneNeumber {
  #number;
  #areaCode;
  constructor(areaCode, number) {
    this.#number = number;
    this.#areaCode = areaCode;
  }

  get number() {
    return this.#number;
  }

  set number(number) {
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(areaCode) {
    this.#areaCode = areaCode;
  }

  get toString() {
    return `${this.#areaCode} ${this.#number}`;
  }
}

class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNeumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
