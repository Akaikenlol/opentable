"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const router = useRouter();
	const [location, setLocation] = useState("");
	return (
		<div className="flex justify-center py-3 m-auto text-left text-lg">
			<input
				type="text"
				className="rounded  p-2 w-[450px] outline-none mr-3"
				placeholder="State, city or town"
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<button
				className="bg-teal-400 px-4 py-2 text-white rounded"
				onClick={() => {
					if (location === "banana") return;
					router.push(`/search?city=${location}`);
					setLocation("");
				}}
			>
				Let's Go
			</button>
		</div>
	);
}
