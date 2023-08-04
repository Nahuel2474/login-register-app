import config from "../../config/config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User, blackListToken } from "../../models";
import { ForQueryingUser } from "../../queriers";
import { ValidationError } from "../../../domain/errors";

export class ControlPlaneController {
	private query: ForQueryingUser = new ForQueryingUser();

	public register = async (req: Request, res: Response) => {
		try {
			const params = req.body;

			await this.query.createUser(params);

			return res.status(201).json({ message: "Registro exitoso" });
		} catch (error) {
			if (error instanceof ValidationError) {
				console.error("Error de validación:", error.message);
				return res.status(409).json({ message: "Usuario Existente." });
			} else {
				console.error(error);
				return res
					.status(500)
					.json({ message: "Hubo un fallo con la creación de usuario." });
			}
		}
	};

	public login = async (req: Request, res: Response) => {
		try {
			const params = req.body;

			const user = await this.query.findUser(params.user, params.email);

			if (!user) {
				throw new ValidationError(
					"El usuario no concuerda con las credenciales otorgadas",
				);
			}

			await this.query.comparePassword(params.password, user.password);

			const token = jwt.sign({ user }, config.jwt!, { expiresIn: 86400 });
			await this.query.updateUser(user, 1);

			return res.status(200).json({
				success: true,
				token: "Bearer " + token,
				message: "Login completado",
			});
		} catch (error) {
			if (error instanceof ValidationError) {
				console.error("Error de validación:", error.message);
				throw error;
			} else {
				console.error(error);
				throw new Error("Error en el servidor");
			}
		}
	};

	public async logout(req: Request, res: Response) {
		try {
			const { id, token } = req.body;

			const user = await User.findOne({ where: { id: id } });

			if (!user) {
				console.log("Usuario no encontrado");
				return res.status(404).json({ message: "Usuario no encontrado." });
			}

			const logout = await user.update({ isLoggin: 0 });

			if (!logout) {
				console.log("Error al intentar logout");
				return res.status(505).json({ message: "Logout fail line 99" });
			}

			const insertToken = await blackListToken.create({
				token: token,
				created_at: new Date(),
				expired_at: new Date(),
			});

			if (!insertToken) {
				console.log("Token no insertado en la tabla correctamente");
				return res.status(500).json({ message: "Token no colocado" });
			}

			console.log(user);

			return res.status(201).json({ message: "logout satisfactorio!" });
		} catch (error) {
			console.error(error);
			console.log("ERROR");
		}
	}

	public ValidateToken(req: Request, res: Response) {
		try {
			const { token } = req.body;
			const verify = jwt.verify(token, config.jwt!);

			if (!verify) {
				return res.json({ isValid: false });
			}

			return res.json({ isValid: true });
		} catch (error) {
			console.error("Hubo un fallo. El token obtenido es:", req.body.token);
			return res
				.status(409)
				.json({ isValid: false, message: "Token no validado", error });
		}
	}
}
