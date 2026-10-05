// let fruits = ["apple","mango","banana","orange"]
// console.log(fruits);




// let arr = ["ram","syham","hanuman"]
// console.log(arr[2]);





// let arr = ["abc","xyz"]
// console.log(arr.length);/* lenth no of values kocount karta h */


// let arr = ["Diwakar","Ashish","Krishna"]
// arr.push("Anurag")  /* push value ko last me add karta h */
// console.log(arr);




// let arr = ["Diwakar","Ashish","Krishna"]
// arr.unshift("Anurag")  /* unshift value ko firsht me add karta h*/
// console.log(arr);




// let arr1 = ["Diwakar","Ashish","Krishna"]
// arr.pop("")
// console.log(arr);




// let name = "Diwakar Rao";
// console.log(name.length);




// let names = ["diwakwr","ashish","krishna","anurag"];
// for(let name of names ){
//     console.log(name, name.length);
// }



// let names = ["mango","apple","orange","banana"];
// for(let name of names){
//     total += n.length;
// }
// console.log(total);



/*   --map function--    */



// let arr = [1,2,3]
// let data = arr.map((arr)=>
//     arr*2
// )
// console.log(data);


// let arr = [1,2,3,]
// let data = arr.map((arr)=>arr*arr)
// console.log(data);


// let name = ["diwakar","ashish","krishna","djjdj"];
// let data = name.map((name)=>name.toupprcase)
// console.log(data)



// let prices = [100,200,300]
// let amount = prices.map((prices)=> prices+100)
// console.log(amount);




// let arr = [2,3,4,5]
// let data = arr.map((arr)=> arr*3)
// console.log(data);



// let name = ["diwakar"]
// let data = name.map((name)=>'hello'+" "+name)
// console.log(data);



// reduce function



// let num = [10,20,30]
// let data = num.reduce((acc, curr)=> acc- curr,0)
// console.log(data



// let num = [10,20,30]
// let data = num.reduce((acc, curr)=> acc+ curr,0)
// console.log(data);



// let num = [10,20,30]
// let data = num.reduce((acc, curr)=> acc* curr)
// console.log(data);



// let product = [200,30,150,90]
// let data = product.reduce((acc, curr)=> acc+ curr,0)
// console.log(data); 


// let marks = [80,56,73,65,77]
// let student = marks.reduce((acc, curr)=> acc+ curr,0)
// console.log(student);



// let num = [39,50,47,94,74,48]
// let data = num.reduce((acc, curr)=> acc>curr? acc:curr)
// console.log(data);



// let num = [39,50,47,94,74,48]
// let data = num.reduce((acc, curr)=> acc<curr? acc:cur)
// console.log(data);




// let num = [1,2,4,5]
// let data = num.reduce((acc)=> acc+1)
// console.log(data);



// let num = [1,2,3,4,5,6,7,8,9]
// let data = num.reduce((acc, curr)=>acc+ curr)
// console.log(data);




// let num = [1,2,3,4]
// let data = num.reduce((acc, curr)=> acc* curr)
// console.log(data);




// let num = [20,30,40,50,60,70]
// let data = num.reduce((acc, curr)=> num % 2==0? acc+ : curr)
// console.log(data);



        /* home work  */



// let product = ["mobail","laptop","tab","redio"]
// let data = product.map(product=> product.toUpperCase())
// console.log(data);



// let user = [{name:"diwakar", age: 23},
//     {name:"ashish", age:23},
//     {name:"aman", age:24}
// ]
// let data2 = user.map(user=> `${user.name} - ${user.age}`);
// console.log(data2);




// let product = [
//     {name:"mobail", price:25000, quantity:2},
//     {name:"laptop", price:50000, quantity:1},
//     {name:"tab", price:15000, quantity:2}
// ]
// let data = product.map(product=> product.price*product.quantity)
// console.log(data);




// let students = [
//   { name: "Rahul", marks: [80, 70, 90] },
//   { name: "Aman", marks: [60, 75, 80] },
//   { name: "Riya", marks: [90, 85, 95] }
// ];

// let result = students.map(student =>
//   student.marks.reduce((total, mark) => total + mark, 0)
// );

// console.log(result);




// let employee = [
//     {name:"aman", salary:18000},
//     {name:"alok", salary:24000},
//     {name:"rudra", salary:20000}
// ]
// let data = employee.map(employee=> employee.salary*1.1)
// console.log(data);





let num = [5,3,9,6,2,8]
let data2 = num.map(num=> num%2==0 ? num*2 : num*3)
console.log(data2


let user = [
    {name:"diwakar", gmail:"diwakar@gmail.com"},
    {name:"ashish", gmail:"ashish@gmail.com"}
]
let data3 = user.map(user=> 
    ({name:user.name
      gmail:user.gmail
    })
    )
    console.log(data3);