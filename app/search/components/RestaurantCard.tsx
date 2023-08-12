import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { calculateReviewsRatingAverage } from "@/utils/calculateReviewsRatingAverage";
import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
	id: number;
	name: string;
	main_image: string;
	price: PRICE;
	cuisine: Cuisine;
	location: Location;
	slug: string;
	reviews: Review[];
}

export default function RestaurantCard({
	restaurant,
}: {
	restaurant: Restaurant;
}) {
	const renderRatingText = () => {
		const rating = calculateReviewsRatingAverage(restaurant.reviews);

		if (rating > 4) return "Awesome";
		else if (rating <= 4 && rating > 3) return "Good";
		else if (rating <= 3 && rating > 0) return "Average";
		else "";
	};

	return (
		<div className="flex pb-5 border-b ml-4">
			<img
				// src="https://i.pinimg.com/750x/5b/8e/40/5b8e40d1ce8e32f057416f511dc02132.jpg"
				src={restaurant.main_image}
				alt=""
				className="w-44 h-36 rounded"
			/>
			<div className="pl-5">
				<h2 className="text-3xl">{restaurant.name}</h2>
				<div className="flex item-start">
					<div className="flex mb-2 ">
						<Stars reviews={restaurant.reviews} />
					</div>
					<p className="ml-2 text-sm ">{renderRatingText()}</p>
					{/* <p>{restaurant.reviews.length}</p> */}
				</div>
				<div className="mb-9">
					<div className="flex text-reg font-light">
						<Price price={restaurant.price} />
						<p className="mr-4 capitalize ml-4">{restaurant.cuisine.name}</p>
						<p className="mr-4 capitalize">{restaurant.location.name}</p>
					</div>
				</div>
				<div className="text-red-500">
					<Link href={`/restaurant/${restaurant.slug}`}>
						View More Information
					</Link>
				</div>
			</div>
		</div>
	);
}
