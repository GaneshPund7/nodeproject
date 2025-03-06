console.log("hello javascript");



// setTimeout(()=>{
// console.log(foo());

//     function foo() {
//         return "Hello I !";
//     }
    
// },2000);

// function test() {
//     console.log(a);
//     console.log(b);
//     var a = 10;
//     let b = 20;
// }
// test();

// console.log(myVar());
// var myVar = 10;

// function myVar() {
//     return 20;
// }
// console.log(myVar);
// var x = 1;
// function outer() {
//     console.log(x);
//     var x = 2;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();

// var x = 10;
// function foo() {
//     console.log(x);
//     var x = 20;
// }
// foo();
// console.log(typeof foo);
// var foo = function() {
//     return "Hello!";
// };
// console.log(typeof foo);
function hoistMe() {
    console.log(message);
    var message = "Hello, Hoisting!";
}
hoistMe();


