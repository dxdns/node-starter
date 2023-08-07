import { Express, Router } from "express"

type RouteType = {
    path: string
    router: Router
}

export class Application {
    private app: Express
    private port: number
    private routes: RouteType[]
    private version: string

    public constructor(app: Express, port: number) {
        this.app = app
        this.port = port
        this.routes = []
        this.version = "v1"
    }

    public getPort() {
        return this.port
    }

    public setVersion(v: string) {
        this.version = v
    }

    private getRoutes() {
        return this.routes
    }

    public addRoute(route: RouteType) {
        this.routes = [...this.routes, { ...route }]
    }

    private routerMapping() {
        this.getRoutes().map((item) => {
            this.app.use(`/${this.version}/${item.path.replace("/", "")}`, item.router)
        })
    }

    public run() {
        this.routerMapping()
        this.app.listen(this.getPort())
    }
}