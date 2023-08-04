import { ForQueryCart } from "../../queriers";
import { Request, Response } from "express";

export class cartController {
	private query: ForQueryCart = new ForQueryCart();

	public getCart = async (req: Request, res: Response) => {
		try {
			const { cartId } = req.body;
			console.log(cartId);
			const products = await this.query.getProducts(24);

			if (!products) {
				console.error("Carrito No encontrado");
				return res.status(404).json({ message: "Cart No encontrado." });
			}

			return res.status(201).json(products);
		} catch (error) {
			console.error(error);
			console.log("errroororor");
			return res.status(404).json({ message: "Problema con el servidor." });
		}
	};
}
