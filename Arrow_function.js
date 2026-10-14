function addvalue(a,b)
{
    let c=a*b
    return c
}

let value=addvalue(100,25)
console.log(value)

//the above mentioned function is normal function where we passing the paramter and return the value

//now we are going to see arrow function
const addvalue1=(d,e)=>
{
let f=(d-e)
return f
}
let  output=addvalue1(25,10)
console.log(output)



//arrow function la value illama 
 const newvalue= ()=> { console.log("hello")}
 newvalue()
// arrow function la first () then => body of the function {    } then variable ah assign pananu newvalue() and then const

//by using multiple paramter value



/*function addition (n) 
{
    console.log(n+n)
}
addition(4)
*/


const additionvalue= n=>  n+n;

console.log(additionvalue(4));