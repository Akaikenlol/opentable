import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function RestaurantMenu({ menu }: { menu: Item[] }) {
	return (
		<main className="mt-5 bg-white">
			<div>
				<div className=" mt-4 pb-1 mb-1">
					<h1 className="font-bold text-4xl">Menu</h1>
				</div>
				{menu.length ? (
					<div className="flex flex-wrap justify-between">
						{menu.map((item) => (
							<MenuCard key={item.id} item={item} />
						))}
					</div>
				) : (
					<div className="flex flex-wrap justify-between">
						<p>This restaurant does not have a menu.</p>
					</div>
				)}
			</div>
		</main>
	);
}
