import sequelize from "../../infraestructure/db/db";
import {
	ProductAttributes,
	ProductCreationAttributes,
} from "../../domain/entities";
import { DataTypes, Model, ModelAttributes, TINYINT } from "sequelize";

export class Product
	extends Model<ProductCreationAttributes>
	implements ProductAttributes
{
	id!: number;
	name!: string;
	price!: number;
	description!: string;
	waist!: string;
	color!: string;
	category!: string;
	image!: string;
	imageHover!: string;
	offer!: string;
	isNew!: number;
	sku!: string;
}

const attributes: ModelAttributes<Product, ProductAttributes> = {
	id: {
		type: DataTypes.DOUBLE,
		primaryKey: true,
		autoIncrement: true,
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	color: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	imageHover: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isNew: {
		type: DataTypes.TINYINT,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	offer: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	price: {
		type: DataTypes.DOUBLE,
		allowNull: false,
	},
	sku: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	waist: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

Product.init(attributes, {
	sequelize,
	modelName: "Product",
	tableName: "products",
	timestamps: false,
});
