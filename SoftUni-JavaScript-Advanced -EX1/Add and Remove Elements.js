function solve(input) {

    let numbs=[];
    
 
    for (let i = 0; i < input.length; i++) {
        if (input[i]=='add') {
            numbs.push(i+1);
        }else{
            numbs.pop();
        }
        
    }
    if (numbs.length==0) {
        console.log("Empty")
    }
 
     numbs.forEach(e=>console.log(e));
 }