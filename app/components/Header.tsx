import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<div className="h-64 bg-gradient-to-r from-[#3ded97] to-[#c8faeb] p-2">
			<div className=" text-center mt-2">
				<h1 className="text-4xl font-bold mb-2 pt-2">
					Find Your Table For Any Occasions.
				</h1>
				<SearchBar />
			</div>
		</div>
	);
}
