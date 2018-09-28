var topic = ['JAVA','HTML','ANGULAR','REACT'];

console.log(topic);

var product = {code:'11', name:'pen', price:'50'}

console.log(product);
console.log(product.code);
console.log(product.name);
console.log(product.price);

var f1 = function(){
    return "i am harsh";
}

var f2 = ()=> {
    return "who are you?";
}

var f3 = ()=>"who am i?";

console.log(f2());
console.log(f3()+" : " + f1());

var add = (a,b) => a+b;

console.log(add(300,400));
