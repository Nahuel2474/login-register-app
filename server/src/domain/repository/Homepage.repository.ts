import { Product } from "../../app/models";

export interface HomePageRepository {
	getProducts(): Promise<Product[]>;
	//getFeaturedProducts(): Promise<Product[]>;
	//searchProducts(query: string): Promise<Product[]>;
	//addToCart(productId: string, quantity: number): Promise<void>;
}
