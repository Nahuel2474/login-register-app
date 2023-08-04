import { UserAttributes } from "../entities";
import { User } from "../../app/models";

export interface controlPlaneRepository {
	createUser(user: UserAttributes): Promise<UserAttributes>;
	updateUser(user: UserAttributes, isLoggin: number): Promise<UserAttributes>;
	findUser(username: string, email: string): Promise<User | null>;
	comparePassword(password: string, userPassword: string): Promise<void>;
}
