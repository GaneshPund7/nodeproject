

async function products (){

    let fruits = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("ok")
        }, 2000)
    }).then(()=>{
        setTimeout(()=>{
            console.log("hello");
            
        },2000);
    })

    console.log("Please wait data is loading...");
    let fruitsData = await fruits;
    
    console.log(fruitsData);
    
}
products();


