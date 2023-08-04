import sequelize from "../../infraestructure/db/db";
import { DataTypes, Model, ModelAttributes } from "sequelize";
import {
	cartItemsAttributes,
	cartItemsCreationAttributes,
} from "../../domain/entities";

export class cartItems
	extends Model<cartItemsAttributes, cartItemsCreationAttributes>
	implements cartItemsAttributes
{
	id!: number;
	cartId!: number;
	productId!: number;
	qty!: number;
}

const attributes: ModelAttributes<cartItems, cartItemsAttributes> = {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	cartId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	productId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	qty: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 1,
	},
};

cartItems.init(attributes, {
	sequelize,
	modelName: "cartItems",
	tableName: "cart_items",
	timestamps: false,
});
