closure:-bind a code to  a lexical scope 
a function along with its lexical environment

function abc(){
    let a=20
    console.log("abc")
    function inner_abc(){
        console.log(a,"....")
    }
    return inner_abc
}
let inner_abc_var=abc()
inner_abc_var()

let b=20
console.log(a,b)
var a=10

fruit="apple"
let fruit;

fruit ="mango"
const fruit

fruit="banana"
var fruit