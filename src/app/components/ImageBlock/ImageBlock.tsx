import Image from "next/image";
import { imageBlockDataRect } from "@/data/imageblock";
import { imageBlockDataSquare } from "@/data/imageblock";
const ImageBlock = () => {
	return (
		<>
			<div className='flex gap-10 mb-10 mt-2'>
				{imageBlockDataSquare.map((image, index) => {
					return (
						<div
							className='relative group w-72 h-72 hover:cursor-pointer'
							key={index}
						>
							<Image
								src={image.image}
								height={500}
								width={500}
								alt='block image'
								className='h-full w-full'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
							<p className='absolute font-extrabold text-lg text-white bottom-6 left-6 shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
								{image.text}
							</p>
						</div>
					);
				})}
			</div>
			<div className='flex gap-10 mb-10'>
				{imageBlockDataRect.map((image, index) => {
					return (
						<div
							className='relative group w-[620px] h-[200px] hover:cursor-pointer'
							key={index}
						>
							<Image
								src={image.image}
								height={620}
								width={200}
								alt='block image'
								className='h-full w-full'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
							<p className='absolute font-extrabold text-lg text-white bottom-6 left-6 shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-y-2'>
								{image.text}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ImageBlock;
