import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";

export interface RestaurantCardType {
	id: number;
	name: string;
	main_image: string;
	cuisine: Cuisine;
	slug: String;
	location: Location;
	price: PRICE;
	reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
	const restaurants = await prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
			main_image: true,
			cuisine: true,
			slug: true,
			location: true,
			price: true,
			reviews: true,
		},
	});

	return restaurants;
};

export default async function Home() {
	const restaurants = await fetchRestaurants();

	console.log({ restaurants });

	return (
		<main>
			<Header />
			<div className="mt-10 px-36 py-3 flex flex-wrap">
				{restaurants.map((restaurant, i) => (
					<RestaurantCard restaurant={restaurant} key={i} />
				))}
			</div>
		</main>
	);
}
