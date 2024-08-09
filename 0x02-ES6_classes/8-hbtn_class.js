export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override the valueOf method to return the size when cast to Number
  valueOf() {
    return this._size;
  }

  // Override the toString method to return the location when cast to String
  toString() {
    return this._location;
  }
}
