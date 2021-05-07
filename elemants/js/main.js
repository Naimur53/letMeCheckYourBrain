//main variable
var n1=3;
var n2="5";
var result;
//main program
var sum = n1 + n2;
    sum = parseInt(sum); //******  
    sum = sum + "";
    sum = typeof sum;
    sum = sum.toUpperCase();
    sum = sum.indexOf("N");   
  if(sum > 1){
   sum = sum*2504 + "";
   result = sum.split(""); 
   result = parseInt(result);
   result = result + "";
   console.log( "re",result);
  }
  else{
      console.log("not valid");
  }   
  console.log( sum);
  sum = sum.indexOf(result);
    console.log(sum);
    
    sum++;
    if(sum >0){
        console.log("sum is greater than 0  and the valu is :",  sum);
    }