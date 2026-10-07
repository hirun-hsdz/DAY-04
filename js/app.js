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

// const productsList = [
//     {name: "bun", inStock: true, price: 100},
//     {name: "bread", inStock: false, price: 200},
//     {name: "milk", inStock: true, price: 300},
//     {name: "egg", inStock: false, price: 400},
//     {name: "cheese", inStock: true, price: 500},
// ];

// // conole .log(productsList); 

// // let inStockProducts = productsList.filter(
// //     function(product){
// //         return productFilter (product)
// //     }
// // );
// // function productFilter(product){
// //     return product.inStock === true;
// // }

// // console.log(inStockProducts); 


// let inStockProducts =
//     productsList.filter(product => product.inStock == true);
        

//     console.log(inStockProducts);

//1 method

// function addNumbers(num1,num2){
//     return num1 + num2;
// }
// console.log(addNumbers(10,20)); // 30

// //2 method
// let getSum = function(num1,num2){
//     return num1 + num2;
// }

// //3 method
// let getTotal = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(getTotal(10,20)); // 30

// //4 method - anonymous function
// (num1,num2) => {
//     return num1 + num2;
// }

// Arrow function with single parameter

// let txtValue = txtValue => {
//     return txtValue;
// }
// console.log(txtValue("Hello")); // Hello 

// //Arrow function with single parameter - short hand

// let txtValue2 = txtValue2 => txtValue2;
// console.log(txtValue2("Hello")); // Hello hirun ridenw hirun


//shorting arrsy of objects

// const leterList  = ["D","A","C","B","E","F"];
// console.log(leterList); // ["D","A","C","B","E","F"]

// const sortedList = leterList.sort();
// console.log(sortedList); // ["A","B","C","D","E","F"]


//map
// const salaryList = [50000, 60000, 70000, 80000, 90000];
// console.log(salaryList); // [50000, 60000, 70000, 80000, 90000]

// const updatedSalaryList = salaryList.map(salary => salary * 2);
// console.log(updatedSalaryList); // [100000, 120000, 140000, 160000, 180000]


//find method

const studentList = [
    {name: "saman", age: 20, gender: "male"},
    {name: "nimal", age: 25, gender: "male"},
    {name: "kamal", age: 30, gender: "male"},
    {name: "sunil", age: 35, gender: "male"},
    {name: "kumar", age: 40, gender: "male"},
];

const student = studentList.find(student => student.age === 30);
console.log(student); // {name: "kamal", age: 30, gender: "male"}





