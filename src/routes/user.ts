import { Router } from "express"
import UsersController from "../controllers/users"
import AuthHandler from "../middleware"

const UserGroup = Router()
const userController = new UsersController()

UserGroup.get("/", userController.get)
UserGroup.get("/:id", AuthHandler, userController.getById)

export default UserGroup