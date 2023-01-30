//short circuiting

//OR orperator (||) find the first element that truthy, if all value are falsy it will return last element 
console.log(3||'Trungdao') // 3
console.log(undefined || null) // null 
console.log(undefined || null || '' || 'hello' || 0) // return hello 
// falsy : undefined '' null 0 false -0 NaN `` ""

/*example useful. If u want to get the element of obj and we dont 
how if it really exist so we can do like this*/
const obj = {
    name : 'Trung',
    age : 18,
}
//with conditional operator
const address1 = obj.address ? bj.address : "Van tien dung"

// with short circuiting 
const address =  obj.address || "Van tien dung" // "Van tien dung" because obj.address is not exist

//And operator find the first element that falsy, if all value are falsy it will return last element 
console.log(undefined && null) //undefined
console.log('dasd' && null) //null
console.log('dasd' && 'duc') //duc
// example
let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    } ,
    // make function order in the restaurant to get what customer want in starterMenu and mainMenu  
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,

    orderDelivery: function({time=1,adress='no adress',mainIndex= 0,starterIndex=1}){
        //using template string
        console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },
    orderPizza: function(mainIngredient, ...ortherIngredient){
        console.log(mainIngredient)
        console.log(ortherIngredient)
    }
    
};
// manual way
if(restaurant.orderPizza){
    restaurant.orderPizza("mustas",'tomato')
}

//use AND operator
restaurant.orderPizza && restaurant.orderPizza("mustas",'tomato')

