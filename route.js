const express = require('express');
const path = require('path');

//const bodyParser= require('body-parser');
var cors = require('cors')	
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var todoContoller = require('./controllers/projects');
var mongoose = require("./database/mongoose");
//app.use('/projects', express.static('public')) //helps to get to pages in
//const projects = require("./models/projects");
//const tasks = require("./model/tasks");
//const users = require("./model/users");
const { request, response } = require('express');

/* app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
	if(req.method==='OPTIONS'){
		res.header("Access-Control-Allow-Methods",'GET');
		return res.status(200).json({});
	}
	next();
}); */

//handling cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,PATCH");
		return res.status(200).json({});
	}
	next();
});

mongoose.establishConnection();

todoContoller(app);


/*
app.post("/tasks/store", async function (request, response) {
	response.status(200).json(request.body);
	const task = await tasks.create(
		{
			name: request.body.name,
			project_id: request.body.project_id,
			priority: request.body.priority,
			status: request.body.status,
			due_date: request.body.due_date,
			description: request.body.description,
			display_order: request.body.display_order

		}).then((record) => {
			console.log("record created");
			console.log(record);
			response.status(200).json(record);

		}).catch((err) => {
			response.status(400).json(err);
		});
}) */

/* app.post("/tasks", async function (request, response) {
	const tasks_data = await tasks.findAll();
	response.status(200).json(tasks_data);
	//response.render("myfile", { tasks_data: tasks_data });
})
app.put("/tasks/update", async function (request, response) {
	const edit_task = await tasks.update(
		{
			name: request.body.name,
			project_id: request.body.project_id,
			priority: request.body.priority,
			status: request.body.status,
			due_date: request.body.due_date,
			description: request.body.description,
			display_order: request.body.display_order
		},
		{
			where:
			{
				id: request.body.id
			}
		}).then(() => response.send("edited Successfully"))
	console.log("project Based on id: ", edit_task);
	response.status(200).json(edit_task);
})

app.delete("/tasks/delete/:id", async (request,response) => {
	await tasks.destroy({
		where: 
		{
			id: request.params.id
		}
	}).then(()=> response.send("Deleted Successfully"));
})

app.post("/tasks/show/:id", async function (request, response) {
	const show_task = await tasks.findOne({
		where:
		{
			id: request.params.id
		}
	})
	console.log("project Based on id: ", show_task);
	response.status(200).json(show_task);
})

/*app.get("/test/:id", async function (request, response) {
	where:
	{
		id: request.params.id
	}
	console.log("project Based on id: ");
	response.status(200).json(id);
})*/

/*app.post("/users/store", async function (request, response) {
	response.status(200).json(request.body);
	const user = await users.create(
		{
			name: request.body.name,
			project_id: request.body.project_id,
			priority: request.body.priority,
			status: request.body.status,
			due_date: request.body.due_date,
			phone: request.body.phone,
			image: request.body.image

		}).then((record) => {
			console.log("record created");
			console.log(record);
			response.status(200).json(record);

		}).catch((err) => {
			response.status(400).json(err);
		});
})

app.post("/users", async function (request, response) {
	const users_data = await users.findAll();
	response.status(200).json(users_data);
	//response.render("myfile", { users_data: users_data });
})
app.put("/users/update", async function (request, response) {
	const edit_user = await users.update(
		{
			name: request.body.name,
			project_id: request.body.project_id,
			priority: request.body.priority,
			status: request.body.status,
			due_date: request.body.due_date,
			phone: request.body.phone,
			image: request.body.image
		},
		{
			where:
			{
				id: request.body.id
			}
		}).then(() => response.send("edited Successfully"))
	console.log("project Based on id: ", edit_user);
	response.status(200).json(edit_user);
})

app.delete("/users/delete/:id", async (request,response) => {
	await users.destroy({
		where: 
		{
			id: request.params.id
		}
	}).then(()=> response.send("Deleted Successfully"));
})

app.post("/users/show/:id", async function (request, response) {
	const show_user = await users.findOne({
		where:
		{
			id: request.params.id
		}
	})
	console.log("project Based on id: ", show_user);
	response.status(200).json(show_user);
})
 */
app.listen(3000, function () {
	console.log("server running");
})
