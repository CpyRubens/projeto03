const routes = require('express').Router();
const CharacterController = require("../controllers/CharacterController.js")

routes.get("/", CharacterController.getAll )
routes.get('/add', CharacterController.add)
routes.post('/create', CharacterController.create )
routes.get("/getById/:id/:method", CharacterController.getById)
routes.post("/update/:id", CharacterController.update)
routes.get("/del/:id", CharacterController.del)

module.exports = routes