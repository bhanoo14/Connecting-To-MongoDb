// const promiseOne = new Promise(function(resolve, rejected){
//     //Doing SOme call Backs and DB

//     setTimeout( function(){
//         console.log("This im My First Promise for Practice");
//         resolve();
//     },1000);
// })

// promiseOne.then(function(){
//     console.log("Promise One is being Consumed");
// });

// const promiseTwo = new Promise(function(resolve, rejected){
//     setTimeout( function(){
//         console.log("This im My First Promise for Practice");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Promise Two is being COnsumed here");
// })

// const promiseThree = new Promise((resovle, rejected) =>{
    
//     setTimeout(()=>{
//         resovle({userName: "Bhanoo Lohar", age: 29});
//     },1000);
// });

// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((xyz) => {
//     console.log(xyz);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// ++++++++ Most Important Way to creatge and consume Prome++++++++

const promiseFive = new Promise( (resovle, rejected) => {
    console.log("I am fiveth Promise");
    setTimeout(()=>{
        let signal = true;
        if(signal){
            resovle({name:"Bhaanoo Lohar", age: 29});
            console.log("I am fiveth Promise");
            
        }else{
            rejected("Your Promise gow rejected for any reason");
            console.log("I am fiveth Promise Error");
        }
    },3000);
})

async function consumePromiseFive(){
    try {
        const respone = await promiseFive;
        console.log(respone.name);
        
    } catch (error) {
        console.log("Something Went wrong here");
    }
}

consumePromiseFive();