import { Router } from "express";
import { cartController } from "../controllers";

export class cartRoute {
	private router = Router();
	private controller = new cartController();

	constructor() {
		this.initRoute();
	}

	private initRoute() {
		this.post();
		this.get();
	}

	private get() {}

	private post() {
		this.router.post("/api/get-cart", this.controller.getCart);
	}

	public getRouter() {
		return this.router;
	}
}
