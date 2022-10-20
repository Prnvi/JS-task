
 
function concate(a,b){
    return a.concat(b)
    }

console.log(concate("be","code"))

function lc(l){
    return l.toLowerCase()
   }
   
   console.log(lc("LOWERCASE"))


function uc(l){
    return l.toUpperCase()
   }
   
   console.log(uc("upperCASE"))



function nom(family,prenom){
    return prenom +" " +family
    }
console.log(nom('Doe','John'))


 
function whiteSpace(str){
    return str = str.replace(/\s/g, '');
}

console.log(whiteSpace("I am John Doe"))