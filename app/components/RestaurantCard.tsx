import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";

interface Props {
	restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
	return (
		<div className="w-64 h-72 overflow-hidden rounded m-4 border cursor-pointer  ">
			<Link href={`/restaurant/${restaurant.slug}`}>
				<img
					src={restaurant.main_image}
					alt=""
					className="w-64 h-36 object-cover"
				/>
				<div className="p-1 ml-2">
					<h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
					<div className="flex items-start">
						{/* <div className="flex mb-2">*****</div> */}
						<Stars reviews={restaurant.reviews} />
						<p className="ml-2">
							{restaurant.reviews.length} Review
							{restaurant.reviews.length === 1 ? "" : "s"}
						</p>
					</div>
					<div className=" flex mb-2 font-light  text-reg capitalize">
						<p className="font-normal mr-3">{restaurant.cuisine.name}</p>
						<Price price={restaurant.price} />
						<p className="ml-2 font-normal">{restaurant.location.name}</p>
					</div>
					<p className="mt-3 font-bold text-reg">Book 3 times today</p>
				</div>
			</Link>
		</div>
	);
}
