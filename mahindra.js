import React from 'react'
var MyHeader = function(){
    return(
        <h3>This is MyHeader</h3>
    );
}
var Hello = (
     <div>
         <h2>Welcome To React</h2>
         <h2>This is jsx</h2>
    </div>
);

var Hi = React.createElement('h2','','Welcome to React!!!');

export var OneMore = function(){
    return (
        <h1> This is Another component </h1>
    );
}