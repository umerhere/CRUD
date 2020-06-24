const express = require('express');
const path = require('path');

//const bodyParser= require('body-parser');
var cors = require('cors')	
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/projects', express.static('public'))
const projects = require("./model/projects");
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



// app.use(cors());
// console.log("after cors")

//DB CONNECTION
//require("./database/connection");
app.post("/projects/store", async function (request, response) {
	response.status(200).json(request.body);
	const project = await projects.create(
		{
			name: request.body.name,
			description: request.body.description,
			display_order: request.body.display_order

		}).then((record) => {
			console.log("record created");
			console.log(record);
			response.status(200).json(record);

		}).catch((err) => {
			response.status(400).json(err);
		});
})

app.get("/projects", cors(),  async function (request, response) {
	const proj = await projects.findAll();
	console.log("project ", proj);
	response.status(200).json(proj);
})

app.get("/projects/show/:id", async function (request, response) {
	const show_project = await projects.findAll({
		where:
		{
			id: request.params.id
		}
	})
	console.log("project Based on id: ", show_project);
	response.status(200).json(show_project);
})

app.put("/projects/update", async function (request, response) {
	const edit_project = await projects.update(
		{
			name: request.body.text,
			description: request.body.description,
			display_order: request.body.display_order
			//text: request.body.text
		},
		{
			where:
			{
				id: request.body.id
			}
		}).then(() => response.send("edited Successfully"))
	console.log("project Based on id: ", edit_project);
	response.status(200).json(edit_project);
})

app.delete("/projects/delete/:id", async (request,response) => {
	await projects.destroy({
		where: 
		{
			id: request.params.id
		}
	}).then(()=> response.send("Deleted Successfully"));
})





app.listen(3000, function () {
	console.log("server running");
})
