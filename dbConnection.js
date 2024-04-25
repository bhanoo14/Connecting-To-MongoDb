// import { MongoClient } from "mongodb"

// const uri = "mongodb://localhost:27017"
// const client = new MongoClient(uri)

// function connectToDataBase(){
//     client.connect()
//     .then( (db)=>{
//         console.log(`Now Connected to Data Base`);
//         const database = client.db(`myDataBaseName`)
//         const myCollection = database.collection("myCollectionName")
//         return myCollection.insertOne({name: "Bhanoo Again", age: 30, email: "bhanoo@lohar.com"})
//     })
//     .then( (respone)=> {
//         console.log(`One data is Inserted into DataBase`, respone);
//     })
//     .catch( (error)=>{
//         console.log(`Something Went Wrong ${error}`);
//     }).finally( ()=> {
//         console.log(`Now Operation is done here I am closing connection Here`);
//     })
// }

// connectToDataBase();

// Second Aproach To Connecting DataBase

import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function dataConnection (){
    try{
        await client.connect()

        console.log("I am connected to Database");

        const dataBase = client.db("babaDataBase")
        console.log("Now choosing Collection");
        
        const myCollection = dataBase.collection("babaCollection")

        myCollection.insertOne({name: "Vaibhav Vishwakarma", age: 15, email: "vaibhav@gmail.com"})
        console.log("Inserting One data");
    }
    catch(error){
        console.log(`Something Went Wrong`,  error);
    }
}

dataConnection();