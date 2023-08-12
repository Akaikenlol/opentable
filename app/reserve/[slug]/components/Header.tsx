import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import format from "date-fns/format";

export default function Header({
	image,
	name,
	date,
	partySize,
}: {
	image: string;
	name: string;
	date: string;
	partySize: string;
}) {
	const [day, time] = date.split("T");

	return (
		<div>
			<h3 className="font-bold">You are almost done!</h3>
			<div className="mt-5 flex">
				<img
					// src="https://i.pinimg.com/750x/5b/8e/40/5b8e40d1ce8e32f057416f511dc02132.jpg"
					src={image}
					alt=""
					className="w-32 h-18 rounded"
				/>
				<div className="ml-4">
					<h1 className="font-bold text-3xl">{name}</h1>
					<div className="flex mt-3">
						<p className="mr-6">{format(new Date(date), "ccc, LLL d")}</p>
						<p className="mr-6">{convertToDisplayTime(time as Time)}</p>
						<p className="mr-6">
							{partySize} {parseInt(partySize) === 1 ? "Person" : "People"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
