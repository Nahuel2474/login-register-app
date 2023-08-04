import { Optional } from "sequelize";

export interface blackListTokenAttributes {
	id: number;
	token: string;
	created_at: Date;
	expired_at: Date;
}

export interface BlackListTokenCreation
	extends Optional<blackListTokenAttributes, "id"> {}
