import { ValidationError } from "../../domain/errors";
import { User } from "../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { controlPlaneRepository } from "../../domain/repository";
import { UserAttributes } from "../../domain/entities";

export class ForQueryingUser implements controlPlaneRepository {
	public async createUser(user: UserAttributes): Promise<UserAttributes> {
		try {
			const existingUser = await this.findUser(user.user, user.email);

			if (existingUser) {
				throw new ValidationError("El usuario ya está registrado.");
			}

			const newUser: UserAttributes = await User.create({
				user: user.user,
				password: bcrypt.hashSync(user.password, 10),
				email: user.email,
				isLoggin: 0,
				cartId: null,
				createAccountDate: new Date(),
			});

			return newUser;
		} catch (error) {
			if (error instanceof ValidationError) {
				console.error("Error al crear el usuario:", error.message);
				throw error;
			} else {
				console.error(error);
				throw new Error("Error en el servidor al crear el usuario.");
			}
		}
	}

	public async updateUser(
		user: User,
		isLoggin: number,
	): Promise<UserAttributes> {
		try {
			const updatedUser: UserAttributes | null = await user.update({
				isLoggin: isLoggin,
			});

			if (!updatedUser) {
				throw new ValidationError(
					"Error al actualizar el estado de inicio de sesión del usuario.",
				);
			}

			return updatedUser;
		} catch (error) {
			if (error instanceof ValidationError) {
				console.error("Error al actualizar el usuario:", error.message);
				throw error;
			} else {
				console.error(error);
				throw new Error("Error en el servidor al actualizar el usuario.");
			}
		}
	}

	public async findUser(username: string, email: string): Promise<User | null> {
		try {
			const user: User | null = await User.findOne({
				where: { user: username, email: email },
			});

			return user;
		} catch (error) {
			console.error(error);
			throw new Error("Error en el servidor al buscar el usuario.");
		}
	}

	public async comparePassword(
		password: string,
		userPassword: string,
	): Promise<void> {
		const match = await bcrypt.compare(password, userPassword);

		if (!match) {
			console.log("Contraseña incorrecta.");
			throw new ValidationError("Las contraseñas no coinciden.");
		}
	}
}
