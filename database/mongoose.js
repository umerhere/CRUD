const mongoose = require("mongoose");

//connect to mongoosedb

mongoose.connection.once('open', function () {
    console.log("DB connection established!");
}).on('error', function (error) {
    console.log('could not connect to MongoDB due to  ${err}');
    process.exit(1);
})

exports.establishConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/project_management_system', {
        //keepAlive: 1,
        //useNewUrlPaeser: true,
        useUnifiedTopology: true
    })
    return mongoose.connection
}
