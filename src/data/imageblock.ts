import block1 from "@/assets/images/block1.webp";
import block2 from "@/assets/images/block2.webp";
import block3 from "@/assets/images/block3.webp";
import block4 from "@/assets/images/block4.webp";
import block5 from "@/assets/images/block5.webp";
import block6 from "@/assets/images/block6.webp";

import { StaticImageData } from "next/image";

export type ImageBlockProps = {
	text: string; // Brand name
	image: StaticImageData;
};

export const imageBlockDataSquare: ImageBlockProps[] = [
	{
		text: "Gent's Watch",
		image: block1,
	},
	{
		text: "Ladies watches",
		image: block2,
	},
	{
		text: "Watch bands",
		image: block3,
	},
	{
		text: "Watch accessories",
		image: block4,
	},
];

export const imageBlockDataRect: ImageBlockProps[] = [
	{
		text: "Vintage luxury watches",
		image: block5,
	},
	{
		text: "Coming Soon",
		image: block6,
	},
];
