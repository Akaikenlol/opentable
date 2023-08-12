import React from "react";
import Header from "./components/Header";

export default function RestaurantLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	return (
		<main>
			<Header name={params.slug} />
			<div className="flex m-auto justify-between items-start w-2/3 0 -mt-10">
				{children}
			</div>
		</main>
	);
}
