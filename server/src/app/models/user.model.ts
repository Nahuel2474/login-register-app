import { DataTypes, Model, ModelAttributes } from "sequelize";
import sequelize from "../../infraestructure/db/db";
import { UserAttributes, UserCreationAttributes } from "../../domain/entities";
import { Cart } from ".";

export class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	public id!: number;
	public user!: string;
	public password!: string;
	public email!: string;
	public isLoggin!: number;
	public cartId!: number;
	public createAccountDate!: Date;
}

const attributes: ModelAttributes<User, UserAttributes> = {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	user: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	isLoggin: {
		type: DataTypes.TINYINT,
		defaultValue: 0,
	},
	cartId: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	createAccountDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
};

User.init(attributes, {
	sequelize,
	modelName: "User",
	tableName: "users", // Nombre de la tabla existente en la base de datos
	timestamps: false, // Si la tabla no tiene timestamps (created_at, updated_at)
});

// Hook afterCreate
User.afterCreate(async (user: User) => {
	try {
		// Crear un carrito asociado al usuario
		const cart = await Cart.create({
			userId: user.id,
			cartItemsId: null,
		});

		console.log(`Carrito creado para el usuario ${user.user}:`, cart.toJSON());
		await user.update({ cartId: cart.id });
		console.log(`Carrito asignado al usuario ${user.user}:`, user.toJSON());
	} catch (error) {
		console.error("Error al crear el carrito:", error);
	}
});
