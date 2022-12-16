// anonymous functions
let a20=function()
{
    console.log("hello");
}
a20()


// named function
function demo()
{
    console.log("naughty class");
}
demo()

function d2()
{
console.log("demo");
}
d2()

//first class function
let a =function()
{
console.log("hi");
}
a()

//function with expression
let d1=function()
{
    console.log("abc");
}
d1()

// Arrow function
let b=()=>{
    console.log("good afternoon");
}
b()
console.log(typeof b);

let s3=()=>{
    return
}

let t1=()=>
console.log("hello");
console.log(t1);

let t2=()=>{
    return "hi";
}
console.log(t2());

let t3=()=>{
    return "haiii"
}
console.log(t3());

// iife
(function(){
    console.log("i am dev ");
})()


//high fun

function hof(a,b,task){
    res=task(a,b)
}
let add=(20,40,function(a,b){
 return 20+40;
})
console.log (add() );


let sub=(60,80,function(a,b){
return 60-80;
})
console.log(sub());


//nested fun

function one(){
    var a=10;
    function two(){
        var b=20;
        console.log(a);
        function three(){
            var c=30;
        console.log(b);
        console.log(c);
    }
    return three
}
return two
}
one()()()


