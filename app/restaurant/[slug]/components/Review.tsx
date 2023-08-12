import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";
import RestaurantCard from "@/app/search/components/RestaurantCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
	return (
		<div className="">
			<h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
				What {reviews.length} {reviews.length === 1 ? "person" : "people"} are
				saying
			</h1>
			<div>
				{reviews.map((review) => (
					<ReviewCard reviews={review} key={review.id} />
				))}
			</div>
		</div>
	);
}
