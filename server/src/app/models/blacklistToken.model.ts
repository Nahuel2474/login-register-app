import sequelize from "../../infraestructure/db/db";
import {
	BlackListTokenCreation,
	blackListTokenAttributes,
} from "../../domain/entities";
import { DataTypes, Model, ModelAttributes } from "sequelize";

export class blackListToken
	extends Model<blackListTokenAttributes, BlackListTokenCreation>
	implements blackListTokenAttributes
{
	public id!: number;
	public token!: string;
	public expired_at!: Date;
	public created_at!: Date;
}

const attributes: ModelAttributes<blackListToken, blackListTokenAttributes> = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	token: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	expired_at: {
		type: DataTypes.DATE,
		allowNull: true,
	},
};

blackListToken.init(attributes, {
	sequelize,
	timestamps: false,
	modelName: "blackListToken",
	tableName: "blacklist_tokens",
});
