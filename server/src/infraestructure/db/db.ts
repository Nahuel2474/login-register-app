import { Sequelize } from "sequelize";
import config from "../../app/config/config";

const sequelize = new Sequelize(
	config.db!, //  nombre de la base de datos
	config.user!, // usuario
	config.pass!,
	{
		// password
		host: "localhost",
		dialect: "mysql",
	},
);

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established Successfully");
	})
	.catch((error) => console.error("Unable to connect to the databaase", error));

export default sequelize;
