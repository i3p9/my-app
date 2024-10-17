import watch1 from "@/assets/images/watch1.webp";
import watch2 from "@/assets/images/watch2.webp";
import watch3 from "@/assets/images/watch3.webp";
import watch4 from "@/assets/images/watch4.webp";
import watch5 from "@/assets/images/watch5.webp";
import watch6 from "@/assets/images/watch6.webp";
import comingSoon1 from "@/assets/images/coming_soon1.webp";
import comingSoon2 from "@/assets/images/coming_soon2.webp";
import comingSoon3 from "@/assets/images/coming_soon3.webp";
import comingSoon4 from "@/assets/images/coming_soon4.webp";

import { StaticImageData } from "next/image";

export type Price = {
	original: string | null; // Original price can be a string or null if not available
	discounted: string | null; // Discounted price can also be a string or null
};

// Define the Watch type
export type Watch = {
	brand: string; // Brand name
	model: string; // Model number
	description: string; // Description of the watch
	price: Price; // Price information
	stockStatus: string; // Availability status
	stockColor: string;
	location: string; // Stock location
	compareLink: string; // Link to compare/view product
	discount: string | null; // Discount information can be a string or null
	discountColor: string | null;
	image: StaticImageData;
};

export const watches: Watch[] = [
	{
		brand: "Casio Edifice",
		model: "ECB-40MP-1AEF",
		description:
			"Suspensione - Racing Multi-Color Series 46 mm Racing inspired chronograph with carbon infused case",
		price: {
			original: "€151.65 ~ $174.-",
			discounted: "€82.60 ~ $95.-",
		},
		stockStatus: "In stock",
		stockColor: "green",
		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: "-40%",
		discountColor: "orange",
		image: watch1,
	},
	{
		brand: "Boccia",
		model: "3361-03",
		description: "3361-03 25 mm Titanium and ceramic ladies watch",
		price: {
			original: "€164.46 ~ $188.-",
			discounted: null, // No discounted price available
		},
		stockStatus: "Only 1 left in stock",
		stockColor: "orange",

		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: "New",
		discountColor: "blue",
		image: watch2,
	},
	{
		brand: "Hugo Boss",
		model: "1502779",
		description: "Graceful 36 mm Ladies quartz watch",
		price: {
			original: "€205.79 ~ $236.-",
			discounted: null, // No discounted price available
		},
		stockStatus: "Only 1 left in stock",
		stockColor: "orange",

		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: "New",
		discountColor: "blue",
		image: watch3,
	},
	{
		brand: "G-Shock",
		model: "DW-6900RGB-1ER",
		description:
			"Virtual Rainbow 50 mm Special edition classic digital G-Shock with RGB dial",
		price: {
			original: "€106.86 ~ $122.-",
			discounted: "€57.81 ~ $66.-",
		},
		stockStatus: "In stock",
		stockColor: "green",
		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: "-40%",
		discountColor: "orange",
		image: watch4,
	},
	{
		brand: "Orient",
		model: "RA-AP0106S30B",
		description:
			"Bambino 38 mm Automatic retro watch with small second",
		price: {
			original: "€302.92 ~ $347.-",
			discounted: "€267.02 ~ $306.-",
		},
		stockStatus: "Delivery within 9 up to 17 working days",
		stockColor: "green",

		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: null, // No discount information available
		discountColor: null,
		image: watch5,
	},
	{
		brand: "G-Shock",
		model: "GA-2100RGB-1AER",
		description:
			"Virtual Rainbow 45.4 mm Special edition analog-digital watch with RGB dial",
		price: {
			original: "€95.99 ~ $110.-",
			discounted: "€61.94 ~ $71.-",
		},
		stockStatus: "In stock",
		stockColor: "green",

		location: "Rotterdam",
		compareLink: "View Product", // Add actual link if available
		discount: "-30%", // No discount information available
		discountColor: "orange",
		image: watch6,
	},
];

export const watchesComingSoon: Watch[] = [
	{
		brand: "Ligure",
		model: "LWT23001N",
		description:
			"Tartaruga 41 mm Gents scuba diver with Swiss movement",
		price: {
			original: "€739.67 ~ $847.-",
			discounted: null,
		},
		stockStatus: "Back in stock soon",
		stockColor: "orange", // Assuming orange for 'Back in stock soon'
		location: "",
		compareLink: "View Product",
		discount: "New",
		discountColor: "blue",
		image: comingSoon1, // Replace with the correct image import
	},
	{
		brand: "Timex",
		model: "TW2V69500",
		description:
			"Q World Time Ring Reissue 39 mm Stainless steel quartz watch with date",
		price: {
			original: "€139.67 ~ $160.-",
			discounted: null,
		},
		stockStatus: "Only 1 left in stock",
		stockColor: "orange", // Assuming orange for low stock
		location: "in Rotterdam",
		compareLink: "View Product",
		discount: null,
		discountColor: null,
		image: comingSoon2, // Replace with the correct image import
	},
	{
		brand: "Citizen",
		model: "BY3005-56E",
		description:
			"Promaster Geo Trekker 46 mm Radio controlled solar GMT quartz watch with perpetual calendar",
		price: {
			original: "€574.38 ~ $658.-",
			discounted: null,
		},
		stockStatus: "Only 1 left in stock",
		stockColor: "orange", // Assuming orange for low stock
		location: "in Breda",
		compareLink: "View Product",
		discount: "New",
		discountColor: "blue",
		image: comingSoon3, // Replace with the correct image import
	},
	{
		brand: "Bulova",
		model: "96K115",
		description:
			"Blood Moon 43.5 mm High precision chronograph set with extra leather NATO-strap",
		price: {
			original: "€577.69 ~ $661.-",
			discounted: null,
		},
		stockStatus: "In stock",
		stockColor: "green", // Assuming green for in stock
		location: "in Rotterdam",
		compareLink: "View Product",
		discount: "New",
		discountColor: "blue",
		image: comingSoon4, // Replace with the correct image import
	},
];
