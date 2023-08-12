"use client";

import useReservation from "@/hooks/useReservation";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function Form({
	slug,
	partySize,
	date,
}: {
	slug: string;
	partySize: string;
	date: string;
}) {
	const [inputs, setInputs] = useState({
		bookerFirstName: "",
		bookerLastName: "",
		bookerPhone: "",
		bookerEmail: "",
		bookerOccasion: "",
		bookerRequest: "",
	});

	const [day, time] = date.split("T");
	const [disabled, setDisabled] = useState(true);
	const [didBook, setDidBook] = useState(false);
	const { error, loading, createReservation } = useReservation();

	useEffect(() => {
		if (
			inputs.bookerFirstName &&
			inputs.bookerLastName &&
			inputs.bookerPhone &&
			inputs.bookerEmail
		) {
			return setDisabled(false);
		}
		return setDisabled(true);
	}, [inputs]);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = async () => {
		const booking = createReservation({
			slug,
			partySize,
			day,
			time,
			bookerFirstName: inputs.bookerFirstName,
			bookerLastName: inputs.bookerLastName,
			bookerPhone: inputs.bookerPhone,
			bookerEmail: inputs.bookerEmail,
			bookerOccasion: inputs.bookerOccasion,
			bookerRequest: inputs.bookerRequest,
			setDidBook,
		});
	};

	return (
		<div className="flex flex-wrap mt-10 justify-between w-[660px]">
			{didBook ? (
				<div>
					<h1>You are all booked up!</h1>
					<p>Enjoy your reservation!</p>
				</div>
			) : (
				<>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="First Name"
						value={inputs.bookerFirstName}
						name="bookerFirstName"
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="Last Name"
						value={inputs.bookerLastName}
						name="bookerLastName"
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="Phone Number"
						value={inputs.bookerPhone}
						name="bookerPhone"
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="Email"
						value={inputs.bookerEmail}
						name="bookerEmail"
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="Occasion (Optional)"
						value={inputs.bookerOccasion}
						name="bookerOccasion"
						onChange={handleChangeInput}
					/>
					<input
						type="text"
						className="rounded border p-3 w-80 mb-4 outline-none"
						placeholder="Request (Optional)"
						value={inputs.bookerRequest}
						name="bookerRequest"
						onChange={handleChangeInput}
					/>
					<button
						className="bg-green-300 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
						disabled={disabled || loading}
						onClick={handleClick}
					>
						{loading ? (
							<CircularProgress className="inherit" />
						) : (
							"Complete Reservation!"
						)}
					</button>
					<p className="mt-4 text-sm">
						By clicking "Complete Reservation" you agree to the OpenTable Terms
						of Use and Privacy Policy. Standard text message rates may apply.
						You may opt out of receiving text message at any time.
					</p>
				</>
			)}
		</div>
	);
}
