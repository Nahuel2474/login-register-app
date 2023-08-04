import { Router } from "express";
import { ControlPlaneController } from "../controllers/";

export class ControlPlaneRoutes {
	private router = Router();
	private controller: ControlPlaneController = new ControlPlaneController();

	constructor() {
		this.initRoutes();
	}

	public initRoutes() {
		this.post();
	}

	public post() {
		this.router.post("/api/login", this.controller.login);
		this.router.post("/api/register", this.controller.register);
		this.router.post("/api/verify", this.controller.ValidateToken);
		this.router.post("/api/logout", this.controller.logout);
	}

	public getRouter(): Router {
		return this.router;
	}
}
