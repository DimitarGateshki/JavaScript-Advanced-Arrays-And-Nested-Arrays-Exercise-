function solve(input) {

    let line=0;
    let colum=0;
    let sum=0;
    input[0].forEach(e=>sum+=e);
    
   for (let i = 0; i < input.length; i++) {
            for (let b = 0; b <input[i].length ; b++) {
              
              line+=input[i][b];
            }

            for (let c = 0; c < input.length; c++) {
              colum+=input[c][i];
            }
          
              
          
          
            if(sum!=colum || sum!=line || line!=colum){
                  
                  return false;
            }
            line=0;
            colum=0;
          
    }
   return true;

}