import { Application } from "./app"
import express from "express"
import { HomeGroup, UserGroup } from "./routes"

function main() {
    const app = new Application(express(), 8001)
    // app.setVersion("v2")
    app.addRoute({ path: "/", router: HomeGroup })
    app.addRoute({ path: "users", router: UserGroup })
    app.run()

    console.info(`running on port: ${app.port}`)
}

main()