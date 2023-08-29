import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
	location,
	cuisine,
	searchParams,
}: {
	location: Location[];
	cuisine: Cuisine[];
	searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
	const prices = [
		{
			price: PRICE.CHEAP,
			label: "$",
			className: "border w-full text-reg rounded-l p-2 font-light text-center",
		},
		{
			price: PRICE.REGULAR,
			label: "$$",
			className: "border w-full text-reg p-2 font-light text-center",
		},
		{
			price: PRICE.EXPENSIVE,
			label: "$$$",
			className: "border w-full text-reg rounded-r p-2 font-light text-center",
		},
	];

	return (
		<div className="w-1/5">
			<div className="border-b pb-4 flex flex-col">
				<h1 className="text-reg font-bold">Region</h1>
				{location.map((location) => (
					<Link
						href={{
							pathname: "/search",
							query: {
								...searchParams,
								city: location.name,
							},
						}}
						className="font-light text-reg capitalize"
						key={location.id}
					>
						{location.name}
					</Link>
				))}
			</div>
			<div className="border-b pb-4 mt-4 flex flex-col">
				<h1 className="text-reg font-bold">Cuisine</h1>
				{cuisine.map((cuisine) => (
					<Link
						href={{
							pathname: "/search",
							query: {
								...searchParams,
								cuisine: cuisine.name,
							},
						}}
						className="font-light text-reg capitalize"
						key={cuisine.id}
					>
						{cuisine.name}
					</Link>
				))}
			</div>
			<div className="mt-3 pb-4">
				<h1 className="mb-2">Price</h1>
				<div className="flex">
					{prices.map(({ price, label, className }, i) => (
						<Link
							className={className}
							href={{
								pathname: "/search",
								query: {
									...searchParams,
									price,
								},
							}}
							key={i}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
