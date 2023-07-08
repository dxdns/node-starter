import { Request, Response } from "express";
import UserModel from "../models/user";

export default class UsersController {
    protected modelUser = new UserModel();

    get = async (req: Request, res: Response) => {
        try {
            const result = await this.modelUser.get();
            res.status(200).send(result);
        } catch (err) {
            res.sendStatus(400);
        }
    };
    
    getById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await this.modelUser.getById(Number(id));

        res.send({
            user: result
        });
    }
}