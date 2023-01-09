let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // make function order in the restaurant to get what customer want in starterMenu and mainMenu  
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderPasta: function (order1,order2,order3){
        console.log(`Your orders include : ${order1}, ${order2} and ${order3}`);
    }  
};

const arr =[4,5,6]

/*if we want create new array with the same value in arr, manual way we do is to loop over 
this array or create the same thing*/

    const newArr = [1,2,3,arr[0],arr[1],arr[3]]
// so we have spread operator to quick problem solving. example
    const arr2 = [1,2,...arr]
// what the spread operator does is take all the values out the arr
    console.log(arr2);// 1 2 4 5 6
/* example useful we have the same restaurant. And we want to update the menu but it still have 
old dishs so: */
    const newMenu = [...restaurant.mainMenu, 'Gnocci',];
    console.log(newMenu); // so we have new menu with new dish
/* we can see spread operator is the same with destructuring but 
the big different is sread take all elements out arr */


//Copy array
    const manMenuCopy = [...restaurant.mainMenu]
//Join two arrs or more 
    const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
    console.log(menu)

//Sread can use for Iterable : arrays, strings, maps, sets and NOT object
    //With String
        const str = 'The Shyn';
        const letter = [...str, '' ,'S.']// ['T', 'h', 'e', ' ', 'S', 'h', 'y', 'n', '', 'S.']
        console.log(letter);
        // if we use with template string its not working. example
            //console.log(`${...str}`) // error
// using spread operator to build function accept mutiple variables   
    // const yourOrder = [
    //     prompt("let's make your pasta! Ingredient 1"),
    //     prompt("Ingredient 2 ?"),
    //     prompt("Ingredient 3 ?")

    // ]          
    // console.log(yourOrder)
    // restaurant.orderPasta(...yourOrder)
// Ojects
    const newRestaurant = {...restaurant, firstThing: 1}
    console.log(newRestaurant)

    const copyRestaurant = {...newRestaurant}
    copyRestaurant.name='TheShyn'
    console.log(copyRestaurant)
