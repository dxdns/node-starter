import { Express, Router } from "express"

type RouteType = {
    path: string
    router: Router
}

export class Application {
    private app: Express
    private port: number = 8001
    private routes: RouteType[] = []
    private version: string = "v1"

    public constructor(app: Express, port?: number) {
        this.app = app
        this.setPort(port)
    }

    private getApp() {
        return this.app
    }

    public getPort() {
        return this.port
    }

    private setPort(port?: number) {
        this.port = port || this.port
    }

    private getRoutes() {
        return this.routes
    }

    private setRoutes(route: RouteType[]) {
        this.routes = route
    }

    public addRoute(route: RouteType) {
        this.setRoutes([...this.routes, { ...route }])
    }

    private getVersion() {
        return this.version
    }

    public setVersion(v: string) {
        this.version = v
    }

    private routerMapping() {
        this.getRoutes().map((item) => {
            this.getApp().use(`/${this.getVersion()}/${item.path.replace("/", "")}`, item.router)
        })
    }

    public run() {
        this.routerMapping()
        this.getApp().listen(this.getPort())
    }
}