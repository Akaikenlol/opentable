export default function Images({ images }: { images: string[] }) {
	return (
		<div>
			<h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
				{images.length} Photo{images.length > 1 ? "s" : ""}{" "}
			</h1>
			<div className="flex flex-wrap">
				{images.map((image) => (
					<img
						src={image}
						alt=""
						className="w-56 h-44 mr-1 mb-1 object-cover"
					/>
				))}
				{/* <img
					src="https://i.pinimg.com/564x/a6/62/26/a66226fb9036e2b761e7209ecd391d64.jpg"
					alt=""
					className="w-56 h-44 mr-1 mb-1 object-cover"
				/>
				<img
					src="https://i.pinimg.com/564x/e6/57/e7/e657e783246186b4f92b82d64d05d9b7.jpg"
					alt=""
					className="w-56 h-44 mr-1 mb-1 object-cover"
				/>
				<img
					src="https://i.pinimg.com/736x/ad/fe/51/adfe511cfe1bbf40f630223eae8d5d94.jpg"
					alt=""
					className="w-56 h-44 mr-1 mb-1 object-cover"
				/>
				<img
					src="https://i.pinimg.com/564x/e6/2e/53/e62e53a1b142ab26ffaa7b7b7d908860.jpg"
					alt=""
					className="w-56 h-44 mr-1 mb-1 object-cover"
				/>
				<img
					src="https://i.pinimg.com/564x/34/06/ff/3406ff3e07290550c3218077f0172396.jpg"
					alt=""
					className="w-56 h-44 mr-1 mb-1 object-cover"
				/> */}
			</div>
		</div>
	);
}
