function add(a, b, pr){
    var c= a+b;
    pr(c);
}
function print(p){
    console.log(p);
}

add(100,500,print);
