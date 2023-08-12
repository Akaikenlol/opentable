import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
	const restaurant = await prisma.restaurant.findUnique({
		where: {
			slug,
		},

		select: {
			item: true,
		},
	});

	if (!restaurant) {
		throw new Error();
	}

	return restaurant.item;
};

export const metadata = {
	title: "Menu",
	description: "OpenTable Description",
};

export default async function Menu({ params }: { params: { slug: string } }) {
	const menu = await fetchRestaurantMenu(params.slug);

	return (
		<>
			<div className="bg-white w-[70%] rounded shadow p-3">
				<RestaurantNavBar slug={params.slug} />
				<RestaurantMenu menu={menu} />
			</div>
		</>
	);
}
