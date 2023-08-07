import { Request, Response, NextFunction } from "express"

export function AuthHandler(req: Request, res: Response, next: NextFunction) {
    const TOKEN = req.header("Authorization")

    if (!TOKEN) {
        return res.status(401).send("access denied")
    }

    if(TOKEN?.split(" ")[1] !== "123") {
        return res.status(400).send("Invalid Token")
    }

    next()
}