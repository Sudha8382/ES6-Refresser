//spread and rest operator(...)
// let list=["Audo","honda","BMW"];
// let newlist=[...list,"ferrari"];
// console.log(newlist);

// let person={
//     name:"sudha"
// }
// let newperson={
//     ...person,
//     city:"delhi"
// }
// console.log(newperson);

//rest operator
// function hello(a,b,c){
// console.log(a,b,c);

// }
// hello(1,2,3);

// function hello(...all){
//     console.log(all);  
//     }
//     hello(1,2,3,4,5);


// Array Destructuring
// let list=["Audi","BMW","Honda"];
// let [car1, ,car3]=list;
// console.log(car3);

// const person={
//     name:"sudha",
//     age:28
// }
// let {name,age}=person;
// console.log(name);

//refrence (array,object)and premitive type(string,number)
//premitive type(string,number)
// let num1=100;
// let num2=num1;
// num2=50;
// console.log(num1);
// console.log(num2);

///refrence (array,object)
// let person={
//     name:"sudha"
// }
// let person2=person;
// person2.name="ajit";
// console.log(person);
// console.log(person2);

// let person={
//     name:"sudha"
// }
// let person2={
//     ...person
// }
// person2.name="ajit";
// console.log(person);
// console.log(person2);

// map function

// let arr1=[2,5,7,10];
// let arr2=arr1.map( x => x*2);
// console.log(arr2);
// console.log(arr1);


//filter function

// let arr3=arr1.filter( x => x%2==0);
// console.log(arr3);
// console.log(arr1);

let arr=[2,5,7,10];
let arr3=arr.filter( function(x){
    if(x%2==0){
        return x;
    }
});
console.log(arr3);
