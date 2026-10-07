//console.log("Hello");

//let , var , const

//{
  //  var name = "Hirun";
  //  let age = 20;

  //  console.log(age); // 20

//}
//console.log(name); // Hirun
//console.log(age); // 20

//let age =30;
//console.log(age); // 30

//age =25;
//console.log(age); // 25

//const number = "1";
//console.log(number); // 123

//number = "2"; // TypeError: Assignment to constant variable.
//console.log(number); // 123

//let customerList = ["saman","nimal","kamal"];
//console.log(customerList); // ["saman","nimal","kamal"]

//customerList =("sunil");
//console.log(customerList); // ["saman","nimal","kamal","sunil"]

//const customerList = ["saman","nimal","kamal"];
//console.log(customerList); // ["saman","nimal","kamal"]

// customerList.push("sunil");
// console.log(customerList); // ["saman","nimal","kamal","sunil"]

// customerList.=["sunil"];

// const number =  [];

// number.push(1);
// console.log(number); // [1]

// number.push(2);
// console.log(number); // [1,2]

// const number =  [];

// number.push(1);
// number.push(2);
// number.push(3);
// number.push(4);
// number.push(5);
// console.log(number); // [1,2,3,4,5]

// number.reverse();
// console.log(number); // [5,4,3,2,1]

//filter

const productsList = [
    {name: "bun", inStock: true, price: 100},
    {name: "bread", inStock: false, price: 200},
    {name: "milk", inStock: true, price: 300},
    {name: "egg", inStock: false, price: 400},
    {name: "cheese", inStock: true, price: 500},
];

conole .log(productsList); 

let inStockProducts = productsList.filter(
    function(product){
        return productFilter (product)
    }
);
function productFilter(product){
    return product.inStock === true;
}

console.log(inStockProducts); 