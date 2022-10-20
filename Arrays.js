const names = ["aaa","abcde","xyz"];

console.log(names);

/**I print an array
Write an algorithm which prints everything in an array.*/

let arr = ['10',"pranavi",'4']
for( let i=0; i< arr.length; i++){
    console.log(a[i])
}
a.forEach(element => console.log(element))


let random_Arr = []
let random_Arr2 = []

for(let i=0; i<5; i++){
   random_Arr[i]= parseInt(Math.random()*10)
}
random_Arr.forEach(element => console.log(element))
for(let i=0; i<5; i++){
    random_Arr2[i] = random_Arr[i];

}

let maxValue = Math.max(...random_Arr)
console.log(maxValue)
// forEach(function(element, index, array))
console.log(random_Arr.indexOf(maxValue))



let miniValue = (Math.min(...random_Arr))
console.log(miniValue)


console.log(random_Arr.indexOf(miniValue))


random_Arr.sort(function(a, b){return b-a})
random_Arr.forEach(element => console.log(element))

random_Arr === random_Arr2 ? console.log(true): console.log(false)
