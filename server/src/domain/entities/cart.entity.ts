import { Optional } from "sequelize";

export interface CartAttributes {
	id: number;
	userId: number;
	cartItemsId: number | null;
}

export interface CartCreationAttributes
	extends Optional<CartAttributes, "id"> {}
