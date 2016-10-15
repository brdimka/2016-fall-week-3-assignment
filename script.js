/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var Shoe1 = {
  name:'Off The Wall',
  price: 40,
  maker:'Vans',
}
var Shoe2 = {
  name:'AllStar',
  price: 80,
  maker:'Converse',
}
var Shoe3 = {
  name:'Techline',
  price: 120,
  maker:'Nike',
}

var productList = ['Shoe1', 'Shoe2', 'Shoe3']; //this is an array

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array
productList.push('Shoe1','Shoe2','Shoe3')
console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    //Your code here
if('Shoe1'.price > 50){
  console.log("The number of products below $50 is " + comparePrice(50));}

/*  console.log(productList[i].price)
  var total = 0;
for(var i = 0; i < productList.length; i++){
  total += productList[i].price;
}*/

    console.log();
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
