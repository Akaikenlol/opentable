import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import { useContext } from "react";

const useAuth = () => {
	const { setAuthState } = useContext(AuthenticationContext);

	const signin = async (
		{
			email,
			password,
		}: {
			email: string;
			password: string;
		},
		handleClose: () => void
	) => {
		setAuthState({
			data: null,
			error: null,
			loading: true,
		});
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/signin",
				{
					email,
					password,
				}
			);
			setAuthState({
				data: response.data,
				loading: false,
				error: null,
			});
			handleClose();
		} catch (error: any) {
			setAuthState({
				data: null,
				loading: false,
				error: error.response.data.errorMessage,
			});
		}
	};
	const signup = async (
		{
			email,
			password,
			firstName,
			lastName,
			city,
			phone,
		}: {
			email: string;
			password: string;
			firstName: string;
			lastName: string;
			city: string;
			phone: string;
		},
		handleClose: () => void
	) => {
		setAuthState({
			data: null,
			error: null,
			loading: true,
		});
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/signup",
				{
					email,
					password,
					firstName,
					lastName,
					city,
					phone,
				}
			);
			setAuthState({
				data: response.data,
				loading: false,
				error: null,
			});
			handleClose();
		} catch (error: any) {
			setAuthState({
				data: null,
				loading: false,
				error: error.response.data.errorMessage,
			});
		}
	};

	const signout = () => {
		removeCookies("jwt");

		setAuthState({
			data: null,
			loading: false,
			error: null,
		});
	};

	return {
		signin,
		signup,
		signout,
	};
};

export default useAuth;
