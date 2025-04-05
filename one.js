// Pass Parameter to a setTimeout() Function



function multiple(a,b){
   console.log(a*b);
}

setTimeout(multiple, 3000, 2, 3);

function greet(){
    console.log("Hello!")
}

setTimeout(greet, 2000);
console.log('This message is shown first');