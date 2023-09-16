const mongo = require("mongoose")

const connect = async () =>{
      try{
        const conn = await mongo.connect(process.env.URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDb Connected: ${conn.connection.host}`)
      }catch(err){
            console.log(`Error: ${err.message}`)
      }
};

module.exports = connect