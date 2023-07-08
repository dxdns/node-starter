import { Router } from "express";
import HomeController from "../controllers/home";

const HomeGroup = Router();
const homeController = new HomeController();

HomeGroup.get("/", homeController.index);

export default HomeGroup;