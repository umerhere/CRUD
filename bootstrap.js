
module.exports = async () => {
    console.log("creating projectg");
    
    const Projects = require("./models/projects");

    const errHandler = err => {
        console.log("Error : ", err);
    }

    const proejct = await Projects.create({
        id: 1,
        name: "1st project"
    }).then((record) => {
        console.log("record created");
        console.log(record);
        
    }).catch(errHandler);
    const proj = await Projects.findAll({ where: { name: '1st project' } }).catch(errHandler);
    console.log("project ", proj);
};