function solve(input) {

    let out=[];
    input=input.sort((a,b)=>a-b);
    
    while(input.length>0){
        let a=input.shift();
        out.push(a);
        if(input.length>0){
            let b=input.pop();
            out.push(b);
        }
    }
 
    return out;
    
 }