function solve(input,rotations) {


    for (let i = 0; i < rotations; i++) {
        let token=input.pop();
        input.unshift(token);
        
    }
    
     console.log(input.join(' '));
 }