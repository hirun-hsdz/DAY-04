// console.log("hello");



// let , var , const

// {
//     var name = "John";
//     let age = 30;

//     console.log(age);
    
// }

// console.log(name);
// console.log(age);


//const 

// let age = 30;
// console.log(age);

// age = 25;
// console.log(age);

// const number = 1;
// console.log(number);

// number = 2;
// console.log(number);


// arrys - const

// let custoemrList = ["Saman", "Nimal", "Kamal"];
// console.log(custoemrList);

// custoemrList = "Kumara";
// console.log(custoemrList);

// const custoemrList = ["Saman", "Nimal", "Kamal"];
// console.log(custoemrList);

// custoemrList.push("Kumara");


// -- array methods ------------

// const number = [];

// number.push(1);
// number.push(2);
// number.push(3);
// number.push(4);
// number.push(5);
// console.log(number);
// number.reverse();
// console.log(number);


//filter

// const productList = [
//     {name:"bun", inStock:true, price: 100},
//     {name:"milk", inStock:true, price: 200},
//     {name:"egg", inStock:false, price: 300},
//     {name:"bread", inStock:true, price: 400},
//     {name:"butter", inStock:false, price: 500},
// ];

// console.log(productList);

//1st step
// let inStockProducts = productList.filter(
//     function(product){ //product = {name:"bun", inStock:true, price: 100} , 
//         return productFilter(product);
       
//     }
// );
// function productFilter(product){
//     return product.inStock == true;
// }

// console.log(inStockProducts);


// 2nd step

// let inStockProducts = productList.filter(
//     function(product){ //product = {name:"bun", inStock:true, price: 100} , 
//         return product.inStock == true;
       
//     }
// );


// console.log(inStockProducts);


// 3rd step

// let inStockProducts = 
//     productList.filter(product => product.inStock == true);


// console.log(inStockProducts);


// functions 

// - 1 method

// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumbers(5, 10));

// // - 2 method
// let getSum = function(num1, num2){
//     return num1 + num2;
// }
// console.log(getSum(5, 10));

// //- 3 method -  arrow function
// let getTotal = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(getTotal(5, 10));

// //-4 method - anonymous arrow function
// (num1, num2) => {
//     return num1 + num2;
// }


// // Arrow function with single parameter
// let txtValue = txtValue =>{
//     return txtValue;
// }
// console.log(txtValue("Hello World"));

// // Arrow function with single parameter - short hand
// let sample = txtValue1 => txtValue1;
// console.log(sample("Hello World 2"));

// // sorting array of objects

// const leterList = ["D", "A", "C", "B", "E", "Z", "N", "L", "I", "O"];
// console.log(leterList);

// const sortArray = leterList.sort();
// console.log(sortArray);

// map  - method

// const salaryList = [50000, 60000, 70000, 80000, 90000];
// console.log(salaryList);

// // // let doubleSalary = salaryList.map(salary => salary * 2);
// // console.log(doubleSalary);

// console.log(salaryList.map(salary => salary * 2));

//find -method
// const studentList = [
//     {name:"Saman", age: 20, gender: "male"},
//     {name:"Nimal", age: 25, gender: "male"},
//     {name:"Kamal", age: 30, gender: "male"},
//     {name:"Sunil", age: 35, gender: "male"},
//     {name:"Kumara", age: 40, gender: "male"},
// ]

// let foundStudent = studentList.find(student => student.name == "Kamal");
// console.log(foundStudent);


//JSON - javascript object notation
//res - response
fetch("https://jsonplaceholder.typicode.com/posts/").then(res => res.json()).then(data => {
    console.log(data);

   let tblItems = document.getElementById("tblItems");

   let tblBody = "";

   data.forEach(element => {
    tblBody += `  <tr> 
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td>${element.userId}</td>
        </tr>`;
   });
    tblItems.innerHTML = tblBody;
});