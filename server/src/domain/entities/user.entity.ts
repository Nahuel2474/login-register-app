import { Optional } from "sequelize";

export interface UserAttributes {
	id: number;
	user: string;
	password: string;
	email: string;
	isLoggin: number;
	cartId: number | null;
	createAccountDate: Date;
}

export interface UserCreationAttributes
	extends Optional<UserAttributes, "id"> {}
