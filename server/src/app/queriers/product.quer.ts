import { HomePageRepository } from "../../domain/repository";
import { Product } from "../models";

export class forQuieryingProducts implements HomePageRepository {
	async getProducts(): Promise<Product[]> {
		const products = await Product.findAll({ raw: true });
		return products;
	}

	async getProduct(id: string): Promise<Product> {
		const product = await Product.findOne({
			where: { id: id },
		});

		if (!product) {
			throw new Error("Producto no encontrado.");
		}
		return product;
	}
}
