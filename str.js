var str1="suhas";

console.log(str1.length)
console.log(str1[0]);

console.log(str1.split("h"));
console.log(str1.trim());


let d1="23";
let d2="28";


console.log(d2-d1);


let person={
    firstname:"suhas",
    lastname:"raj"
};

console.log(person.lastname);

let demo={"isbn": "123-456-222",  
"author": 
   {
     "lastname": "Doe",
     "firstname": "Jane"
   },
"editor": 
   {
     "lastname": "Smith",
     "firstname": "Jane"
   },
 "title": "The Ultimate Database Study Guide",  
 "category": ["Non-Fiction", "Technology"],
 fullname: function()
 {
        console.log(this.author.firstname+this.author.lastname);
 }
}

for(s in demo)
{
    console.log(demo[s]);
}

console.log(demo.fullname())
console.log(demo.lastname()+"**************");