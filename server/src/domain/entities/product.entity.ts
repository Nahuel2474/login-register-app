import { Optional } from "sequelize";

export interface ProductAttributes {
	id: number;
	name: string;
	price: number;
	description: string;
	waist: string;
	color: string;
	category: string;
	image: string;
	imageHover: string;
	isNew: number;
	sku: string;
	offer: string;
}

export interface ProductCreationAttributes
	extends Optional<ProductAttributes, "id"> {}
