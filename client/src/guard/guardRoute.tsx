import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const verifyToken = async () => {
	const token = localStorage.getItem("token");
	try {
		const res = await axios.post("http://localhost:3000/api/verify", { token });
		const data = await res.data;
		console.log(data);
		return data.isValid;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export function ProtectRoute({
	element: Component,
}: { element: React.ElementType }) {
	const [isValidToken, setIsValidToken] = useState<boolean | undefined>(
		undefined,
	);
	const [isTokenVerified, setIsTokenVerified] = useState<boolean>(false);

	useEffect(() => {
		verifyToken().then((res) => {
			setIsValidToken(res);
			setIsTokenVerified(true);
		});
	}, []);

	if (!isTokenVerified) {
		// Mostrar un loader o mensaje de carga mientras se verifica el token
		return null;
	}

	if (isValidToken === undefined) {
		return null;
	}

	if (isValidToken) {
		return <Component />;
	} else {
		return <Navigate to="/" />;
	}
}
