class Booking {
  #show;
  #date;
  #premiumDelegate;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }
  
  get hasTalkback() {
    return this.#premiumDelegate
    ? this.#premiumDelegate.hasTalkback
    : this.#show.hasOwnProperty('talkback') && !this.isPeakDay;
  }
  
  get basePrice() {
    return this.#premiumDelegate
    ? this.#premiumDelegate.basePrice
    : this.#privateBasePrice;
  }
  
  get #privateBasePrice() {
    let result = this.#show.price;
    
    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }
    
    return result;
  }
  
  get hasDinner() {
    return this.#premiumDelegate
    ? this.#premiumDelegate.hasDinner
    : undefined;
  }
  
  #bePrimium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
  
  static createBooking(show, date) {
    return new Booking(show, date);
  }
  
  static createPremiumBooking (show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePrimium(extras);
    return result;
  }
}
class PremiumBookingDelegate {
  #host
  #extras
  #show
  #privateBasePrice
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.#show.hasOwnProperty('talkback');
  }

  get basePrice() {
    return Math.round(this.#host.#privateBasePrice + this.#extras.PremiumFee);
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay;
  }
}


const booking = Booking.createBooking('show', 'date');
const premiumBooking = Booking.createPremiumBooking('show', 'date', 'extras');
