const prompt=require("prompt-sync") ({sigint:true})
let n
let a=Math.floor(Math.random() * 100);
let Attempt=0
while(true)
{
    n=prompt("Enter a number :")
    n=Number.parseInt(n)
if(a>n){
    console.log("Number is greater than :",n)
}
else if(a<n)
{
    console.log("Number is samller than :",n)
}
else{
    console.log("The number is :",a)
    console.log("Your answer is correct after "+Attempt+" Attempts")
    return false
}
Attempt++;
}
