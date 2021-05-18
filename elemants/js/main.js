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
    //learning new thing in js
var friendsAge = [20, 19, 21];
 friendsAge[1] =2; // it well repleace 19 by 2
 var n=3;
 friendsAge.push(n);//adding new thing in array 
console.log(friendsAge);
console.log(friendsAge.length);//length of arrary (how many elemants array have)
 
var hi = [23,5,56,3,2]; 
hi.pop();//it wil remove last element in arry 
hi.push("sadi")//adding new thing in array 
hi.unshift("naimur ")//unshift will add element in beginning of array
hi.shift();//it will remove element in the beginning of array
console.log( hi );
/*
push adding last 
pop remove last 
unshift adding first 
shift removing first
*/ 
hi=hi.slice(2,3);//it wil delete first 0 1 and start showing at  2 to end ; amake 2 theke dekhao and before 3
console.log("slice 1 to 2",hi);
var song = 0;
while(song <=10){
    console.log("said",song); 
    song++;
}

var naimur = [2,4,5,6];
var l=naimur.length; 
var c ;
var r =0;
while(r<l){ 
    c = naimur[r]; 
    console.log(c);
    r++;
}
for(var i=0; i<naimur.length; i++)
{
    console.log(naimur[i]);
}
var avi = [1,43,32,432];
var x = 0;  
var y ;
 
var ovi=100; 
switch(ovi){
    case 100:
        console.log("its 100");
        break;
    case 50:
        console.log ("its 50 ");
        break;
    case 30:
    case 20:
        console.log ("its 30 or 20");
        break;
    default:
        console.log("wrong number "); 
}
while(3000>x){
    y = avi.indexOf(x);  
     switch (true){
        case( y>=0):
            console.log("refd",x);
            x++;
            break;
        default:
            x++; 
     }

}
var na;
function learn(num){
    var sum = num*2; 
    return sum;//function ar baire value ke ana jai
}
var one = learn(33);
var two = learn(3);
var sum =one +two;
console.log(sum);




function oddOrEven(value){
    var cheak = value/2;
    var second = parseInt(cheak);
    if(cheak > second){
        console.log("odd");
    }
    else{
        console.log("Even");
    }   
}
oddOrEven(50);
var  student = {id:33, phone:3432, name:"naimur"};
var ph1 = student.phone;// another is var  ph2 = student["phone"];
console.log(ph1);
student.phone = 67;
console.log(student);
student.newelemat = 39329389;//adding new propartis 
console.log(student);
var same = [24,5343,222,2];
var large =same[0];
for(var i=0; i<same.length;i++){
    var ele=same[i];
    if(ele>large){
        large=ele; 
    }
 
}
console.log("large number is ",large);
var inputFromuser = Window.prompt("you name ");
console.log("your name is ", inputFromuser);

