
const projects = require("../models/projectSchema");

module.exports = function (app)
{
    //here we were just chking if db and user creation is fine we dont need it here 
    //const User = require('./models/user')


    /* const userInput = {
        project_id: 1,
        name: "test",
        description: "testje",
        display_order:1
    }

    const user = new projects(userInput);
    user.save((err, document) => {
        if (err)
            console.log(err)
        console.log(document)
    }) */


    
    /* app.post('/projects', async function (req, res, next) {
        //get data from mongodb and pass it to views
        try {
            await projects.find({}, function (err, data) {
                if (err) throw err;
                //res.status(200).json(data);
                console.log(data);
                //res.render('todo', { todos: data });
            })
        } catch (e) {
            console.log(e);
            next(e);
        }

    }); */
    app.post("/projects", async function (req, res) {
        const projects_data = await projects.find({}, function (err,data) {
            if (err) throw err;
            
        });
        var abc= await projects.findById("5f51d2c7db4c83397c467440");
        res.status(200).json(projects_data);
        //res.render("myfile", { projects_data: projects_data });
    })

    app.post("/projects/store", async function (req, res) {

        var all_project;
        try {
            all_project = await new projects({ //_id is bydefault objectID
                name: req.body.name,
               description: req.body.description,
               display_order: req.body.display_order
            }).save().then(function (err, data) {
                //if (err) throw err;
                console.log("saved!!!!");
                res.status(200).json(req.body);
            })
        } catch (error) {
            console.log("errror!!!!");
            console.log(error);
        }
    });

    app.post("/projects/show/:name", async function (req, res) {
        const show_project = await projects.find({
                name: req.params.name //not gonna work
        })
        console.log("project Based on name: ", show_project);
        res.status(200).json(show_project);
    })

    app.delete("/projects/delete/:id", async (req, res) => {
        await projects.deleteOne({ _id: req.params.id}).then(() => res.send("Deleted Successfully"));
     })

    app.put("/projects/update", async function (req, res) {
        const edit_project = await projects.updateOne({ _id: req.body.id },
            { 
                $set: 
                {
                    name: req.body.name,
                    description: req.body.description,
                    display_order: req.body.display_order
                } 
            }).then(() => res.send("edited Successfully"))
        res.status(200).json(edit_project);
    })
/* 
app.post("/projects", async function (req, res) {
    const projects_data = await projects.findAll();
    res.status(200).json(projects_data);
    //res.render("myfile", { projects_data: projects_data });
})

app.get("/test/:id", async function (req, res) {
    where:
    {
        id: req.params.id
    }
    console.log("project Based on id: ");
    res.status(200).json(id);
})

app.post("/projects/store", async function (req, res) {
    res.status(200).json(req.body);
    const project = await projects.create(
        {
            name: req.body.name,
            description: req.body.description,
            display_order: req.body.display_order

        }).then((record) => {
            console.log("record created");
            console.log(record);
            res.status(200).json(record);

        }).catch((err) => {
            res.status(400).json(err);
        });
})


app.post("/projects/show/:id", async function (req, res) {
    const show_project = await projects.findOne({
        where:
        {
            id: req.params.id
        }
    })
    console.log("project Based on id: ", show_project);
    res.status(200).json(show_project);
})

app.put("/projects/update", async function (req, res) {
    const edit_project = await projects.update(
        {
            name: req.body.name,
            description: req.body.description,
            display_order: req.body.display_order
            //text: req.body.text
        },
        {
            where:
            {
                id: req.body.id
            }
        }).then(() => res.send("edited Successfully"))
    console.log("project Based on id: ", edit_project);
    res.status(200).json(edit_project);
})

app.delete("/projects/delete/:id", async (req, res) => {
    await projects.destroy({
        where:
        {
            id: req.params.id
        }
    }).then(() => res.send("Deleted Successfully"));
})
 */
}