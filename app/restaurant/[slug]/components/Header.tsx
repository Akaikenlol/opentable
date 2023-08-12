export default function Header({ name }: { name: string }) {
	const renderTitle = () => {
		const nameArray = name.split("-");

		nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

		return nameArray.join(" ");
	};

	return (
		<div className="h-96 overflow-hidden">
			<div className="flex justify-center items-center h-full bg-gradient-to-r from-[#3ded97] to-[#c8faeb]">
				<h1 className="text-7xl font-bold capitalize text-center">
					{renderTitle()}
				</h1>
			</div>
		</div>
	);
}
