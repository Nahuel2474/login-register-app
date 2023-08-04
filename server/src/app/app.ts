import { ExpressServerConnection } from "../infraestructure/express/Connect";
import { blackListToken } from "./models/blacklistToken.model";

const express = new ExpressServerConnection();
const app = express.getApp();
