import Link from "next/link";

export default function RestaurantNavBar({ slug }: { slug: string }) {
	return (
		<nav className="flex text-reg pb-2 border-b">
			<Link href={`restaurant/${slug}`} className="mr-4">
				Overview
			</Link>
			<Link href="" className="mr-4">
				Photo
			</Link>
			<Link href={`restaurant/${slug}/menu`} className="mr-4">
				Menu
			</Link>
			<Link href="" className="mr-4">
				Preview
			</Link>
		</nav>
	);
}
