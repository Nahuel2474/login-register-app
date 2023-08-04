import { CartRepoQuerying } from "../../domain/repository";
import { cartItemsAttributes, ProductAttributes } from "../../domain/entities";
import { cartItems, Product } from "../models";

export class ForQueryCart implements CartRepoQuerying {
	private cart: cartItemsAttributes[] = [];

	public async addProduct(productId: number, cartId: number): Promise<void> {
		//const create = await cartItems.create({cartId, productId: productId, qty: 1})
	}

	public async calculateSubTotal(): Promise<void> {}

	public async deleteProduct(productId: number): Promise<void> {}

	public async getProducts(cartId: number): Promise<ProductAttributes[]> {
		const list = await cartItems.findAll({
			where: { cartId: cartId },
			attributes: ["productId"],
			raw: true,
		});
		const productIds = list.map((item) => item.productId);
		console.log(productIds);
		const products: ProductAttributes[] = await Product.findAll({
			where: { id: productIds },
			raw: true,
		});
		return products;
	}
}
