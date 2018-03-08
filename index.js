let system = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0; 
let tripId = 0;

class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name 
    system.drivers.push(this)
  }
  trips(){
    return driver.trips.filter(trip => {
      return trip.driverId === this.id 
    })
  }
  passengers(){
    return driver.passengers.filter(passenger => {
      return passenger.driverId == this.id
    })
  }
}