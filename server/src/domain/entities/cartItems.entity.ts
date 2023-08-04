import { Optional } from "sequelize";

export interface cartItemsAttributes {
	id: number;
	cartId: number;
	productId: number;
	qty: number;
}

export interface cartItemsCreationAttributes
	extends Optional<cartItemsAttributes, "id"> {}
