// we can set default value for parameter if u dont want to pass enough arguments
const createBooking = function(flightNum='d',numPassenger='a',price = 100){
    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking)
}


createBooking('das','dsfd') // { flightNum: 'das', numPassenger: 'dsfd', price: 100 } if it doesnt have default value the result is { flightNum: 'das', numPassenger: 'dsfd', price: undefinded } 
createBooking('das') //{ flightNum: 'das', numPassenger: 'a', price: 100 }
createBooking() // { flightNum: 'd', numPassenger: 'a', price: 100 }