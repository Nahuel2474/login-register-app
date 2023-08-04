import { forQuieryingProducts } from "../../queriers/product.quer";
import { Request, Response } from "express";

export class homeController {
	private query: forQuieryingProducts = new forQuieryingProducts();

	public getProducts = async (req: Request, res: Response) => {
		const products = await this.query.getProducts();
		return res.status(201).json(products);
	};

	public getProduct = async (req: Request, res: Response) => {
		const { id } = req.query;

		if (typeof id !== "string") {
			return res.status(400).json({ error: "Invalid ID" });
		}

		const products = await this.query.getProduct(id);
		return res.status(201).json(products);
	};
}
