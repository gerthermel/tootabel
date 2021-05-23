const mysql = require('mysql');
const util = require('util');
const config = require('config');
const process = require('process');
const {MongoClient} = require('mongodb');

async function main(){
    var connectionString = "mongodb://localhost:27017/tootabel";
    const uri = `${connectionString}`;
    const client = new MongoClient(uri, {useUnifiedTopology: true});
    try{
        await client.connect();
    }catch(e){
        console.error(e);
    } finally{
        console.log('asd')
        await client.close();
    }
}
const db = main();


module.exports = db;
