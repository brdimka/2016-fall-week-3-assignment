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
  name: "Off The Wall",
  price: 40,
  maker: "Vans",
}
var Shoe2 = {
  name: "AllStar",
  price: 80,
  maker: "Converse",
}
var Shoe3 = {
  name: "Techline",
  price: 120,
  maker:"Nike",
}

var productList = [Shoe1, Shoe2]; //this is an array

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array
productList.push(Shoe3);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */

 for(var i = 0; i < productList.length; i++){
     //Your code here
     if(productList[i].price < 50)
       console.log("The product " + (productList[i].name) + " costs " + (productList[i].price) + " and is a match." )
 };

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length
var totalprice = 0
var avgprice = 0

for(var i = 0; i < productList.length; i++){
    totalprice = totalprice + productList[i].price;

};
avgprice = totalprice / productList.length
console.log("The average price is " + avgprice)


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

var pricecompare50 = 0
var pricecompare150 = 0

 for(var i = 0; i < productList.length; i++){
     //Your code here
    if(productList[i].price < 50)
      pricecompare50 = pricecompare50 + 1
    if(productList[i].price < 150)
      pricecompare150 = pricecompare150 + 1
 };
console.log("The number of products below $50 is " + pricecompare50)
console.log("The number of products below $150 is " + pricecompare150)


//
