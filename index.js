let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
       return trip.driverId === this.id;
    })
  }

  //this is what we're stuck on right now:
  //idea is mostly there, just trying to figure out how to access the Array
  //that results from calling trips() on this driver.

  passengers() {
    const array = this.trips();
    return array.filter(trip => {
      return trip.passenger;
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }
}
