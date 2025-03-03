// There are different type of error in js 
// 1) Syntax error
// 2) Reference error
// While you are not declaring and variable of or function and you are trying to access that variable 
// the javascript engine will through this error 

try{
   add(5) 
}catch(error){
//  throw new Error("Refernce error");
 console.log(error.name, error.message);

}
// 3) URI error
try{
console.log(decodeURI("http://abc.com"));

console.log(decodeURI("%fsfs"));

}catch(error){
    console.log(error.name, error.message);
    
}
// 4) Type error

// 5) Range error


const checkRange = (num)=>{
    try{
       if (num  < 30) throw new RangeError("Wrong number");
       return true
    }catch(error){
       console.log(error.name, error.message);
    }
     }
     
     checkRange(20);

    //  which type of error will occure here
    //  console.log(a);
    //  let a = 10;
    //  Refernce error

// which type of error will occure here
//      const num = 42;
// num();
    //  type error


// which type of error will occure here
    // const obj = {
    //     1name: "Alice"
    //   };
    //   syntax error

    // which type of error will occure here
    // function infinite() {
    //     return infinite();
    //   }
    //   infinite();


    // const user = "John";
    // user = "Doe";
    // console.log(user);