//------------------------------------this----------------------------------
var obj = {
    fname: "ayush",
    age: 23,
    fn: function(){
        console.log(fname);  //undefined
        console.log(this.fname); // this means current object "obj" | o/p = ayush
        console.log(obj.fname);  // also can be written as | o/p = ayush
    }
}
obj.fn();

console.log(this); // o/p (in node or pc) = {}
                   // o/p (in browser) = window object

function hello(){
    console.log(this); //op window object (in both)
}
hello();  


//--------------------------------------new----------------------------------------
function hello(){
    let fname = "ayush";
    return(this.fname); // undefined, as "this" is pointing to window obj here, 
                             // and there is no fname in window obj
}
console.log(hello());

console.log(new hello()); // "new" creates empty obj of hello name | now we can create parameter and values inside that hello obj, like below-

function hello(){
    let fname = "ayush";
    this.fname = fname;
    this.age = 12; 
}
console.log(new hello()); // returns the obj, { fname: 'ayush', age: 12 }


//--------------------------------------constructor----------------------------------------

// it is a special way for defining the properties and methods of a object
// it is used to create similar types of objects, each object is called *******INSTANCE******

function Car(model, color, coy){
    this.model = model;
    this.color = color;
    this.comapny = coy;
}

const car1 = new Car("2015", "red", "ford");
const car2 = new Car("2025", "maroon", "suzuki");

console.log(car1);
console.log(car2);

//otherwise we had to create one by one, like below-
const car1 = {
    model: "2015",
    color: "red",
    comapny: "ford"
}
console.log(car1);