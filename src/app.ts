import express, { Express, Router } from "express"
import { HomeGroup, UserGroup } from "./routes"

type RouteType = {
    path: string
    router: Router
}

class Application {
    private app: Express
    public port: number
    private routes: RouteType[]

    public constructor(app: Express, port: number) {
        this.app = app
        this.port = port
        this.routes = []
    }

    private getRoutes() {
        return this.routes
    }

    public addRoute(route: RouteType) {
        this.routes = [...this.routes, { ...route }]
    }

    private routerMapping() {
        this.getRoutes().map((item) => {
            this.app.use(`/v1/${item.path.replace("/", "")}`, item.router)
        })
    }

    public run() {
        this.routerMapping()
        this.app.listen(this.port)
    }
}

function main() {
    const app = new Application(express(), 8001)
    app.addRoute({ path: "/", router: HomeGroup })
    app.addRoute({ path: "users", router: UserGroup })
    app.run()
    
    console.info(`running on port: ${app.port}`)
}

main()