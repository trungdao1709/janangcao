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

const res1 = {
    name: 'rest2',
    numGuests: 0,
}
const res2 = {
    name: 'rest3',
    owner: 'Giovanni Rossi',
}
//OR assignment operator
// res1.numGuests = res1.numGuests ||10
// res2.numGuests = res2.numGuests ||10


///shorcut logical assignment operator ??=  ||=  &&= 
res1.numGuests ??= 10
res2.numGuests ||= 10
console.log(res1, res2)