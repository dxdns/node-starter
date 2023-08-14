import { Application } from "./app"
import express from "express"
import { HomeGroup, UserGroup } from "./routes"
import env from "dotenv"

function main() {
    env.config()
    const app = new Application(express(), Number(process.env.PORT))
    app.addRoute({ path: "/", router: HomeGroup })
    app.addRoute({ path: "users", router: UserGroup })
    app.run()

    console.info(`running on port: ${app.getPort()}`)
}

main()