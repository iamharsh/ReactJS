function f1(){
    return "Hello I am Harsh";
}

var who = f1();
console.log(who);

function f2(){
    return f1;
}

var f3 = f2();
console.log(f3);
console.log(f3());
console.log(f2);
console.log(f2()());
