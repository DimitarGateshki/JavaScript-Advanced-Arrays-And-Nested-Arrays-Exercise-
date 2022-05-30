function solve(input) {

    let sorted=input.sort((a,b)=>{
     if (a.length > b.length) {
         return 1;
       }
       if (a.length < b.length) {
         return -1;
       }
       if(a.length == b.length){
           
           return a.toLowerCase().localeCompare(b.toLowerCase());
 
       }
    });
 
    sorted.forEach(element =>console.log(element) );
 
 
 }
 