import { Router } from "express"
import UsersController from "../controllers/users"

const UserGroup = Router()
const userController = new UsersController()

UserGroup.get("/", userController.get)
UserGroup.get("/:id", userController.getById)

export default UserGroup