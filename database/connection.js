const Sequelize = require('sequelize');
const db= new Sequelize("test",'root','',{
    host : 'localhost', 
    //port: "9090",
    dialect: "mysql", 
    operatorsAliases: false
});

db.authenticate().then(()=>{
    console.log("conencted to db");
    
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
    
});

db.sync({
    logging:console.log,
    force:false//otherwise will create new database on server startup
}).then(()=>{
    console.log("DB Synced");
    
}).catch();


module.exports = db;

//global.sequelize=sequelize; //making it accessible all over the project