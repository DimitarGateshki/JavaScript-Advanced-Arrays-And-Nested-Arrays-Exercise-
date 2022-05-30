function solve(input) {

    let biggest=0;
    let arr=[];
    
 
    for (let i = 0; i < input.length; i++) {
        if (biggest<=input[i]) {
            arr.push(input[i]);
            biggest=input[i];
        }
        
    }
    
     return arr;
 }
 