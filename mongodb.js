import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

function dbConnection(){
    client.connect()
    .then((db) => {
        console.log("Connected to DataBase");

        const database = client.db("myData");
        console.log("Select Your DataBase");

        const myCollection_1 = database.collection("myCollection");

        return myCollection_1.insertOne({useName: "Bhanoo Vishwakarma", age: 29});
    }).then((respone) => {
            console.log("One data Entry Successfull", respone);
    }).catch( (error) => {
        console.log("Something Went wrong :", error);
    }).finally( () => {
        client.close();
        console.log("Now I am disconecting from DataBase");
    })
}

dbConnection();