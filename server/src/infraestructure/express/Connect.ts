import express, { Application } from "express";
import { Middlewares } from "../../app/express/middlewares";
import { ControlPlaneRoutes, homeRouter } from "../../app/express/routes";
import { cartRoute } from "../../app/express/routes/control-cart.routes";

export class ExpressServerConnection {
	private app: Application = express();
	private auth: ControlPlaneRoutes = new ControlPlaneRoutes();
	private cart: cartRoute = new cartRoute();
	private home: homeRouter = new homeRouter();
	private Middlewares: Middlewares = new Middlewares();

	constructor() {
		this.initFunction();
	}

	public initFunction() {
		this.app = express();
		this.Middlewares.initMiddlewares(this.app);
		this.initRoutes();
		this.app.listen(3000, () => {
			console.log("Server is listening on port 3000");
		});
	}

	public initRoutes() {
		this.app.use("/", this.auth.getRouter());
		this.app.use("/", this.cart.getRouter());
		this.app.use("/", this.home.getRouter());
	}

	public getApp() {
		return this.app;
	}
}
