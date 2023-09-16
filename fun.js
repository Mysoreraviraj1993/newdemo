// let democls=require("./cls")

// function sum(a,b)
// {
//     return a+b;
// }

// console.log(sum(3,90));


// let r= function(c,d){
// return c+d;
// }

// console.log(r(7,90));

// let r2=(v,n)=>v+n;
// console.log(r2(8,5));

// let d11=new democls("rajesh","rr");
// console.log(d11.age);
// console.log(d11.fullname())



let str2="Today is Monday";
const d1=str2.split("");
//console.log(d1)
let i=0;
for(d3 in d1)
{
    //console.log(d1[d3]);
    if(d1[d3]=="a")
    {
            i++;
    }
}

console.log(i);


let str3="Today is Monday";
let s5=str3.split("");
let set1=new Set(str3.split(""));
console.log(set1);
for(d3 in set1)
{
    console.log(d3);
}
let ar1=Array.from(set1);
console.log(ar1);
//console.log(ar1.sort());
let e1=s5.filter((currentValue, currentIndex) =>
s5.indexOf(currentValue) !== currentIndex);
console.log(e1);

console.log(str3.split("").reverse().join(""));

