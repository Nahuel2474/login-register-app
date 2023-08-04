import sequelize from "../../infraestructure/db/db";
import { CartAttributes, CartCreationAttributes } from "../../domain/entities";
import { DataTypes, Model, ModelAttributes } from "sequelize";

export class Cart
	extends Model<CartAttributes, CartCreationAttributes>
	implements CartAttributes
{
	public id!: number;
	public userId!: number;
	public cartItemsId!: number;
}

const attributes: ModelAttributes<Cart, CartAttributes> = {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	cartItemsId: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
};

Cart.init(attributes, {
	sequelize,
	timestamps: false,
	modelName: "Cart",
	tableName: "cart",
});
