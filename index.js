class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name 
    trip.driver.push(this)
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