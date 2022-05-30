function solve(input,del) {

    let end=[];
    
 
    for (let i = 0; i < input.length; i++) {
        if (i%del==0) {
            end.push(input[i]);
        }
        
    }
 
    return end;
 }