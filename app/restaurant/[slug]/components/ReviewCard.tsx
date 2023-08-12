import Stars from "@/app/components/Stars";
import { Review } from "@prisma/client";
import React from "react";

export default function ReviewCard({ reviews }: { reviews: Review }) {
	return (
		<div className="border-b pb-7 mb-7">
			<div className="flex">
				<div className="w-1/6 flex flex-col items-center">
					<div className="rounded-full bg-teal-200 w-16 h-16 flex items-center justify-center">
						<h2 className="text-white text-2xl uppercase">
							{reviews.first_name[0]}
							{reviews.last_name[0]}
						</h2>
					</div>
					<p className="mt-5 text-center">
						{reviews.first_name} {reviews.last_name}
					</p>
				</div>
				<div className="ml-10 w-5/6">
					<div className="flex items-center">
						<div className="flex mr-5">
							<Stars rating={reviews.rating} reviews={[]} />
						</div>
					</div>
					<div className="mt-5">
						<p className="text-lg font-light">{reviews.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
