import Image from "next/image";
import watch1 from "@/assets/images/watch1.webp";
import { Watch } from "@/data/watches";
import { FaCircle } from "react-icons/fa";

interface SingleItemHomeProps {
	data: Watch; // Expect data to be of type Watch
	size: string;
}

const SingleItemHome: React.FC<SingleItemHomeProps> = ({
	data,
	size,
}) => {
	const statusStyle = `gap-1 font-semibold text-xs ${
		data.stockColor === "green" ? "text-green-500" : "text-orange-500"
	}`;
	const discountStyle = `absolute top-0 right-0 font-semibold text-white px-1 rounded-sm ${
		data.discountColor === "orange" ? "bg-orange-600" : "bg-blue-500"
	}`;

	const sizeStyle = `${
		size === "small" ? "w-48" : "w-72"
	} border border-gray-300 rounded-md hover:shadow-xl flex flex-col items-center justify-between`;
	return (
		<div
			className={sizeStyle}
			// className={`border border-gray-300 rounded-md w-52 hover:shadow-xl flex flex-col items-center justify-between`}
		>
			<button className=' flex flex-col items-center p-2 gap-1 '>
				<div className='relative'>
					<Image
						src={data.image}
						height={size === "small" ? 180 : 300}
						width={size === "small" ? 180 : 300}
						alt='watch photo'
					/>
					{data.discount && (
						<span className={discountStyle}>{data.discount}</span>
					)}
				</div>
				<p className='font-semibold text-sm'>{data.brand}</p>
				<p className='text-gray-400 text-sm'>{data.model}</p>
				<p className='line-clamp-3 text-xs text-center'>
					{data.description}
				</p>
				<div className='flex items-center text-center'>
					{data.price.discounted && (
						<p className='text-gray-400 line-through'>
							{data.price.discounted}
						</p>
					)}
					<p>{data.price.original}</p>
				</div>
				<p className={statusStyle}>
					<FaCircle
						style={{
							display: "inline",
							paddingRight: "4px",
							marginBottom: "2px",
						}}
					/>
					{data.stockStatus}
				</p>
				<p className='italic text-gray-400 text-xs'>
					in {data.location}
				</p>
				<p className='text-xs'>Compare</p>
			</button>
			<button className='w-11/12 border-2 border-green-500 text-green-500 rounded-md text-sm p-2 m-2'>
				View Product
			</button>
		</div>
	);
};

export default SingleItemHome;
