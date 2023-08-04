import express, { Application } from "express";
import cors from "cors";

export class Middlewares {
	public initMiddlewares(app: Application) {
		app.use(express.json());
		app.use(cors({ origin: "*" }));
	}
}
