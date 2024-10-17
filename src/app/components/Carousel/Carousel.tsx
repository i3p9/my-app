"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// import image1 from "@/public/banner1.webp";
// import image2 from "@/public/banner2.webp";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import image1 from "@/assets/images/banner1.webp";
import image2 from "@/assets/images/banner2.webp";
import image3 from "@/assets/images/banner3.webp";

// Interface for image data
interface ImageData {
	src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
	{
		src: image1,
	},
	{
		src: image2,
	},
	{
		src: image3,
	},
];

export default function Carousel(): JSX.Element {
	// State to keep track of the current image index
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// State to determine if the image is being hovered over
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// Function to show the previous slide
	const prevSlide = (): void => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	// Function to show the next slide
	const nextSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	// useEffect hook to handle automatic slide transition
	useEffect(() => {
		// Start interval for automatic slide change if not hovered
		if (!isHovered) {
			const interval = setInterval(() => {
				nextSlide();
			}, 3000);

			// Cleanup the interval on component unmount
			return () => {
				clearInterval(interval);
			};
		}
	}, [isHovered]);

	// Handle mouse over event
	const handleMouseOver = (): void => {
		setIsHovered(true);
	};

	// Handle mouse leave event
	const handleMouseLeave = (): void => {
		setIsHovered(false);
	};

	return (
		<div className='relative mt-4'>
			<div
				className='relative h-[460px] group'
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			>
				<Image
					src={images[currentIndex].src}
					alt={`Slider Image ${currentIndex + 1}`}
					layout='fill'
					objectFit='cover'
					className='rounded-sm transition-all duration-500 ease-in-out cursor-pointer'
				/>
			</div>
			<button
				className='absolute top-1/2 transform -left-4 rounded-full hover:bg-[#1a222f76] mx-1 -translate-y-1/2 bg-[#1119273c] text-white p-2 group transition-all duration-300 ease-in-out'
				onClick={prevSlide}
			>
				<BiChevronLeft
					size={25}
					className='text-gray-50 group-hover:text-white'
				/>
			</button>
			<button
				className='absolute -right-4 top-1/2 transform rounded-full hover:bg-[#1a222f76] mx-1 -translate-y-1/2 bg-[#1119273c] text-white p-2 group transition-all duration-300 ease-in-out'
				onClick={nextSlide}
			>
				<BiChevronRight
					size={25}
					className='text-gray-50 group-hover:text-white'
				/>
			</button>
			<div className='flex justify-center mt-4'>
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-5 w-5 mx-1 ${
							index === currentIndex
								? "bg-[#13660f] rounded-full"
								: "bg-gray-300 rounded-full"
						} transition-all duration-500 ease-in-out`}
					></div>
				))}
			</div>
		</div>
	);
}
