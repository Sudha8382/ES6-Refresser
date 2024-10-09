//class and object
class customer{
    constructor(n){
        this.name=n;
    }
    age=25;
    buy(){
        console.log(this.name);
        
    }
}
class GuestCustomer extends customer {
    hello() {
        console.log("hello");
        
    }
}
// let customer1=new customer("sudha");
// let customer1=new customer("hello.....");
// console.log(customer1);
// customer1.buy();


let customer1=new  GuestCustomer("sudha");
console.log(customer1);

customer1.buy();