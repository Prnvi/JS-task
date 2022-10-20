
var a = 1;
var b = 2;



function sum(a,b){

  return  a+b;

}
console.log(sum(a,b));

function div(x,y){
    return (x/y);
}
console.log(div(20,5))

let  p = "Pranavi";
let q = " Lakkavajjala";

function concat(p,q){
    return p+q;
}
console.log(concat("Pran", "avi"));

function VAT(actual_price){
    return actual_price * 1.21;
}
console.log(VAT(100));

function calculate_seconds(hours, mins, secs){
    return ((hours*3600) + (mins * 60) + secs);
}
console.log(calculate_seconds(1,30,32));
