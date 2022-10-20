let number = 6;
switch (number) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
  console.log(day);



  let pN = 30;
let charge
if (pN<11){
    charge = pN*0.12
}
else if(pN>10&&pN<21){
    charge = pN*0.12+(pN-10)*0.11
}
else charge =10*0.12+20*0.11+(pN-30)*0.10
console.log(charge, "no of copy",pN)


  let dice1 =6//parseInt((Math.random*10))    
let dice2 = 5//parseInt(Math.random*10)
let dice3 =  3//parseInt(Math.random*10)
if (dice1==dice2&&dice1==dice3)
    console.log("3 identical value",dice1,dice2,dice3)

else if((dice1==dice2&&dice1==dice3)||(dice2==dice3&&dice1==dice2)||(dice3==dice1&&dice3==dice2))
    console.log("2 dice identical value",dice1,dice2,dice3)

else if (dice1==dice2||dice1==dice3||dice2==dice3)
    console.log("1 identical value",dice1,dice2,dice3)
else console.log("no identical",dice1,dice2,dice3)