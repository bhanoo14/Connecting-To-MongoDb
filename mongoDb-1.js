// import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// async function connectToDataBase(){
//     try {
//         const databaseConect = await client.connect();
//         console.log("Hello World");
//         const databaseSelection = client.db("myData");
//         const myCollection = databaseSelection.collection("myCollection");
        
//     } catch (error) {
//         console.log(error, "Connection is successsful");
//     }
// }

// connectToDataBase();

import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

function connectToDataBase() {
    client.connect()
        .then( () => {
            console.log("Hello World");
            const databaseSelection = client.db("myData");
            const myCollection = databaseSelection.collection("myCollection");
        })
        .catch(error => {
            console.error("Error occurred while connecting to the database:", error);
        })
        .finally(() => {
            // Optional: Perform any cleanup tasks here
            // This block will be executed regardless of success or failure
        });
}

connectToDataBase();