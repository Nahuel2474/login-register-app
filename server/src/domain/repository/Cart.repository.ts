import { ProductAttributes } from "../entities";

export interface CartRepoQuerying {
	addProduct(productId: number, cartId: number): Promise<void>;
	deleteProduct(productId: number, cartId: number): Promise<void>;
	getProducts(cartId: number): Promise<ProductAttributes[]>;
	calculateSubTotal(): Promise<void>;
}
