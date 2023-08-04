import { Router } from "express";
import { homeController } from "../controllers";

export class homeRouter {
	private router = Router();
	private controller = new homeController();

	constructor() {
		this.initRoute();
	}

	private initRoute() {
		this.get();
	}

	private get() {
		this.router.get("/api/get-all-products", this.controller.getProducts);
		this.router.get("/api/get-product", this.controller.getProduct);
	}

	public getRouter() {
		return this.router;
	}
}
