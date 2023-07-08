import { Request, Response } from "express";

export default class HomeController {
    index = async (req: Request, res: Response) => {
        res.status(200).send("Hello World");
    };
}