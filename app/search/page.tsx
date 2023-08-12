import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

export const metadata = {
	title: "Search",
	description: "OpenTable Description",
};

const prisma = new PrismaClient();

interface SearchParams {
	city?: string;
	cuisine?: string;
	price?: PRICE;
}

const fetchRestaurantByCity = (searchParams: SearchParams) => {
	const where: any = {};

	if (searchParams.city) {
		const location = {
			name: {
				equals: searchParams.city.toLowerCase(),
			},
		};
		where.location = location;
	}

	if (searchParams.cuisine) {
		const cuisine = {
			name: {
				equals: searchParams.cuisine.toLowerCase(),
			},
		};
		where.cuisine = cuisine;
	}

	if (searchParams.price) {
		const price = {
			equals: searchParams.price,
		};
		where.price = price;
	}

	const select = {
		id: true,
		name: true,
		main_image: true,
		price: true,
		cuisine: true,
		location: true,
		slug: true,
		reviews: true,
	};

	return prisma.restaurant.findMany({
		where,
		select,
	});
};

const fetchLocations = async () => {
	return prisma.location.findMany();
};

const fetchCuisines = async () => {
	return prisma.cuisine.findMany();
};

export default async function Search({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const restaurants = await fetchRestaurantByCity(searchParams);
	const location = await fetchLocations();
	const cuisine = await fetchCuisines();
	return (
		<>
			<Header />
			<div className="flex items-start justify-between w-2/3 py-4 m-auto">
				<SearchSideBar
					location={location}
					cuisine={cuisine}
					searchParams={searchParams}
				/>
				<div className="w-5/6">
					{restaurants.length ? (
						<>
							{restaurants.map((restaurant) => (
								<RestaurantCard restaurant={restaurant} key={restaurant.id} />
							))}
						</>
					) : (
						<p>Sorry, we found no restaurants in this area.</p>
					)}
				</div>
			</div>
		</>
	);
}
