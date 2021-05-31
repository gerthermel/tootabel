const mysql = require('mysql');
const util = require('util');
const config = require('config');
const process = require('process');
const {MongoClient} = require('mongodb');

async function connect(){
  var connectionString = "mongodb://localhost:27017/tootabel";
  const uri = `${connectionString}`;
  const client = new MongoClient(uri, {useUnifiedTopology: true});
  try{
      await client.connect();
  }catch(e){
      console.error(e);
  } finally{
      await client.close();
  }
}

const db = connect();



module.exports = db;

