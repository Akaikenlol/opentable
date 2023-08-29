"use client";

import { useState } from "react";
import { partySize as partySizes, times } from "../../../../data";
import DatePicker from "react-datepicker";
import useAvailabilities from "@/hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { convertToDisplayTime, Time } from "@/utils/convertToDisplayTime";

export default function ReservationCard({
	openTime,
	closeTime,
	slug,
}: {
	openTime: string;
	closeTime: string;
	slug: string;
}) {
	const { data, loading, error, fetchAvailabilities } = useAvailabilities();
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const [time, setTime] = useState(openTime);
	const [partySize, setPartySize] = useState("2");
	const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
	console.log( data );
	const handleChangeDate = (date: Date | null) => {
		if (date) {
			setDay(date.toISOString().split("T")[0]);
			return setSelectedDate(date);
		}
		return setSelectedDate(null);
	};

	const handleClick = () => {
		fetchAvailabilities({
			slug,
			day,
			time,
			partySize,
		});
	};

	const filterTimeByRestaurantOpenWindow = () => {
		const timesWithinWindow: typeof times = [];

		let isWithinWindow = false;

		times.forEach((time) => {
			if (time.time === openTime) {
				isWithinWindow = true;
			}
			if (isWithinWindow) {
				timesWithinWindow.push(time);
			}
			if (time.time === closeTime) {
				isWithinWindow = false;
			}
		});
		return timesWithinWindow;
	};

	return (
		<div className="fixed w-[15%] rounded bg-white p-3 shadow">
			<div className="text-center border-b pb-2 font-bold">
				<h4 className="mr-7 text-lg">Make a Reservation</h4>
			</div>
			<div className="my-4 flex flex-col">
				<label htmlFor="">Party Size</label>
				<select
					name=""
					className="py-3 border-b font-light outline-none"
					id=""
					value={partySize}
					onChange={(e) => setPartySize(e.target.value)}
				>
					{partySizes.map((size, i) => (
						<option value={size.value} key={i}>
							{size.label}
						</option>
					))}
				</select>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col w-[48%]">
					<label htmlFor="" className="">
						Date
					</label>
					<DatePicker
						selected={selectedDate}
						onChange={handleChangeDate}
						className="py-3 text-reg border-b w-24 font-light"
						dateFormat="MMMM d"
						wrapperClassName="w-[48%]"
					/>
				</div>
				<div className="flex flex-col w-[48%]">
					<label htmlFor="" className="">
						Time
					</label>
					<select
						name=""
						className="py-3 border-b font-light outline-none"
						id=""
						value={time}
						onChange={(e) => setTime(e.target.value)}
					>
						{filterTimeByRestaurantOpenWindow().map((time, i) => (
							<option value={time.time} key={i}>
								{time.displayTime}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="mt-5">
				<button
					className="bg-teal-200 w-full rounded px-4 h-16 font-bold"
					onClick={handleClick}
					disabled={loading}
				>
					{loading ? <CircularProgress color="inherit" /> : "Find a Time"}
				</button>
			</div>
			{data && data.length ? (
				<div className="mt-4">
					<p className="text-reg">Select a Time</p>
					<div className="flex flex-wrap mt-2">
						{data.map((time, i) => {
						// 	<Link
						// 	href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
						// 	className="bg-teal-200 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
						// 	key={i}
						// >
						// 	<p className="text-sm font-bold">
						// 		{convertToDisplayTime(time.time as Time)}
						// 	</p>
						// </Link>
							return time.available ? (
								<Link
									href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
									className="bg-teal-200 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
									key={i}
								>
									<p className="text-sm font-bold">
										{convertToDisplayTime(time.time as Time)}
									</p>
								</Link>
							) : (
								<p
									className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3 text-center"
									key={i}
								>{convertToDisplayTime(time.time as Time)}</p>
							);
})}
					</div>
				</div>
			) : null}
		</div>
	);
}
