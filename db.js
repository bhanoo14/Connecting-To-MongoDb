import { MongoClient } from 'mongodb'

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

function myConnection(){
    client.connect()
    .then( ()=> {
        const dataBase = client.db("myDataBase")
        console.log("Now I am connected to DataBase");

        const myCollection = dataBase.collection("myCollection")
        console.log("Now I am choosing myCollection Name");
        return myCollection.insertOne({name:"Lohar Jee X", age: 30, email:"lohar@example.com"})

    }).then( (response)=> {
        console.log("Entery SuccessFul",response);
    }).catch( (error)=> {
        console.log("Something Went Wring", error);
    }).finally( ()=>{
        console.log("Helloe I am Done");
    })
}

myConnection()

// import { MongoClient } from "mongodb"

// const uri = "mongodb://localhost:27017"
// const  dbConnect = new MongoClient(uri);

// async function myConncetion(){
//     try{
//         await dbConnect.connect()
//         console.log("Connected to DataBae");

//         const dataBase = dbConnect.db("myDataBase")

//         const mycollection = dataBase.collection("myColl")
//         console.log("my Collection is selected now");

//         const myObject = await mycollection.insertOne({name: "Vinod VIshwakarma", age: 45, email: "vinod@lohar"})
//         console.log(myObject);
//     }
//     catch(error){
//         console.log("Something Went Wrong", error);
//     }
//     finally{
//         await dbConnect.close()
//         console.log("Now disconnecting from Server");
//     }
// }

myConncetion()

// creating new promise here
// const promiseX = new Promise((resolve, rejected)=>{
//     setTimeout(()=> {
//         resolve({name:"Bhanoo", age:30})
//         console.log("my Promise is resolved here");
//     }, 1000)
// })

// async function comsumingProX(){
//     const response = await promiseX
//     console.log(response);
// }

// comsumingProX()

import { MongoClient } from "mongodb"

const url = "mongodb://localhost:27017"
const dbConnect = new MongoClient(url)

async function dbConnection(){
    try {
        await dbConnect.connect()
        const myDB = dbConnect.db("myDataBaseY")
        const myCollectionY = myDB.collection("myCollectY")
    } catch (error) {
        console.log();
    }
}
