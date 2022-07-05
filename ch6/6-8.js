export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

export class NumberRange {
  #max;
  #min;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan = new NumberRange(51, 53);

readingsOutsideRange(
  station,
  operationPlan
);
