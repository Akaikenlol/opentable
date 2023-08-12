"use client";

import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInput from "./AuthModalInput";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { signin, signup } = useAuth();
	const { data, error, loading } = useContext(AuthenticationContext);

	const renderContent = (signinContent: string, signupContent: string) => {
		return isSignin ? signinContent : signupContent;
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		city: "",
		email: "",
		password: "",
	});

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (isSignin) {
			if (inputs.password && inputs.email) {
				return setDisabled(false);
			}
		} else {
			if (
				inputs.firstName &&
				inputs.lastName &&
				inputs.phone &&
				inputs.email &&
				inputs.password &&
				inputs.city
			) {
				return setDisabled(false);
			}
		}
		setDisabled(true);
	}, [inputs]);

	const handleClick = () => {
		if (isSignin) {
			signin({ email: inputs.email, password: inputs.password }, handleClose);
		} else {
			signup(inputs, handleClose);
		}
	};

	return (
		<div>
			<button
				className={`${renderContent(
					"bg-green-300 text-white",
					""
				)} p-2 px-4 border rounded mr-2 cursor-pointer`}
				onClick={handleOpen}
			>
				{renderContent("Sign In", "Sign Up")}
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{loading ? (
						<div className="py-24 px-2 h-[600px] flex justify-center">
							<CircularProgress />
						</div>
					) : (
						<div className="p-2 h-[600px]">
							{error ? (
								<Alert severity="error" className="mb-4">
									{error}
								</Alert>
							) : null}
							<div className="uppercase font-bold text-center pb-2 border-b mb-2">
								<p className="text-sm">
									{renderContent("Sign In", "Create Account")}
								</p>
							</div>
							<div className="m-auto">
								<h2 className="text-2xl font-light text-center">
									{renderContent(
										"Log Into Your Account",
										"Create Your OpenTable Account"
									)}
								</h2>
								<AuthModalInput
									inputs={inputs}
									handleChangeInput={handleChangeInput}
									isSignin={isSignin}
								/>
								<button
									className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
									disabled={disabled}
									onClick={handleClick}
								>
									{renderContent("Sign In", "Create Account")}
								</button>
							</div>
						</div>
					)}
				</Box>
			</Modal>
		</div>
	);
}
