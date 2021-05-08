//main variable
var n1=3;
var n2="5";
var result;
//main program
var sum = n1 + n2;
    sum = parseInt(sum); //******  
    sum++;
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
    //learning new thing in j
var friendsAge = [20, 19, 21];
 friendsAge[1] =2; // it well repleace 19 by 2
 var n=3;
 friendsAge.push(n);//adding new thing in array 
console.log(friendsAge);
console.log(friendsAge.length);//length of arrary (how many elemants array have)
 
var hi = [23,5,56,3]; 
hi.pop();
hi.push("sadi")
hi.unshift("naimur ")//unshift will add element in beginning of array
hi.shift();
console.log( hi );