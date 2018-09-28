function add(a, b, disp){
    disp(a+b);
}

add(100,200,function pr(c){
    console.log(c);
});

add(10,20,(c)=>{
    console.log(c);
});
