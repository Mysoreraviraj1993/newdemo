let n1=[12,34,56,233,445,2445];
console.log(n1.length);

for(let i=0;i<n1.length;i++)
{
    console.log(n1[i]);
}

n1.push(56);
console.log(n1)
n1.unshift(2);
console.log(n1);


console.log(n1.indexOf(34));


console.log(n1.includes(2));

console.log(n1.slice(2,5));


console.log("this is a dummy text2");

let total=n1.reduce((sum,mark)=>sum+mark,0);
console.log(total);

console.log("***************************");

console.log(n1.filter(s1=>s1%2==0));

console.log("***************************");

console.log(n1.map(s2=>s2*2));

console.log("***************************");


console.log(n1.sort((a,b)=>b-a));