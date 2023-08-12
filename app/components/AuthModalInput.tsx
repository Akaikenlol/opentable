import React from "react";

interface Props {
	inputs: {
		firstName: string;
		lastName: string;
		phone: string;
		city: string;
		email: string;
		password: string;
	};
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isSignin: boolean;
}

export default function AuthModalInput({
	inputs,
	handleChangeInput,
	isSignin,
}: Props) {
	return (
		<div>
			{isSignin ? null : (
				<div className="my-3 flex justify-between text-sm">
					<input
						type="text"
						className="border rounded py-3 p-2 w-[49%] outline-none"
						placeholder="First Name"
						value={inputs.firstName}
						onChange={handleChangeInput}
						name="firstName"
					/>
					<input
						type="text"
						className="border rounded py-3 p-2 w-[49%] outline-none"
						placeholder="Last Name"
						value={inputs.lastName}
						onChange={handleChangeInput}
						name="lastName"
					/>
				</div>
			)}
			{isSignin ? null : (
				<div className="my-3 flex justify-between text-sm">
					<input
						type="text"
						className="border rounded py-3 p-2 w-[49%] outline-none"
						placeholder="Phone"
						value={inputs.phone}
						onChange={handleChangeInput}
						name="phone"
					/>
					<input
						type="text"
						className="border rounded py-3 p-2 w-[49%] outline-none"
						placeholder="City"
						value={inputs.city}
						onChange={handleChangeInput}
						name="city"
					/>
				</div>
			)}
			<div className="my-3 flex justify-center text-sm">
				<input
					type="text"
					className="border rounded outline-none py-3 p-2 w-full"
					placeholder="Email"
					value={inputs.email}
					onChange={handleChangeInput}
					name="email"
				/>
			</div>
			<div className="my-3 flex justify-center text-sm">
				<input
					type="password"
					className="border rounded outline-none py-3 p-2 w-full"
					placeholder="Password"
					value={inputs.password}
					onChange={handleChangeInput}
					name="password"
				/>
			</div>
		</div>
	);
}
