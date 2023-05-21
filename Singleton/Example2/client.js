const {SingletonDB} = require('./singletonDB')
const db1 = new SingletonDB();
const db2 = new SingletonDB();

//Testing if singleton design is working
if(db1 === db2) console.log("Working!"); //Working!

//Connection
db1.connect({name:'Test'}) //Database has been connected
db2.connect({name:'Test2'}) //Already connected!

//Query
db1.query('SELECT * FROM users');
db2.query('SELECT * FROM users');

//Disconnect
db1.disconnect(); //Sucessfully disconnected
db2.disconnect(); //Not connected to the database
