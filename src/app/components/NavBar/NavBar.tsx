import { IoStar } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import styles from "./NavBar.module.css";
import clsx from "clsx";
const navItems = [
	"Brands",
	"Mens",
	"Ladies",
	"Kids",
	"Vintage",
	"Watch bands",
	"Watch accessories",
	"New",
	"Outlet",
];

const brands = [
	"Adidas",
	"Aerowatch",
	"Alpina",
	"Bering",
	"Boccia titanium",
	"Bruno Söhnle",
	"Bulova",
	"Calvin Klein",
	"Calypso Kids",
	"Candino",
	"Casio watches",
	"Casio Edifice",
	"Charmex of Switzerland",
	"Citizen watches",
	"Claude Bernard",
	"Cluse watches",
	"Danish Design",
	"Diesel",
	"Dutch Card House",
	"Edox",
	"Emporio Armani",
	"Esprit",
	"Eterna",
	"Festina",
	"Fossil",
	"Frederique Constant",
	"G-Shock",
	"Garmin",
	"Garonne Kids",
	"GC",
	"Guess",
	"Hugo Boss",
	"Ice-Watch",
	"Jacob Jensen",
	"Jacques du Manoir",
	"Jaguar",
	"Keinzeit",
	"Lacoste",
	"Ligure",
	"Lorus",
	"Lotus",
	"Luminox",
];

const all_brands_items = [
	"All 70+ watch brands",
	"All watch band brands",
	"Bestsellers",
	"Vintage",
];

const NavBar = () => {
	return (
		<nav className='shadow-lg relative'>
			<div className='w-full bg-[#c5bcb0]'>
				<div className='h-8 text-xs flex items-center justify-between max-w-screen-xl mx-auto'>
					<div className='uppercase'>
						{" "}
						Part of{"  "}
						<span className='font-bold'>
							Holland Watch Group B.V.
						</span>
					</div>
					<div className='flex items-center gap-2 hover:cursor-pointer'>
						<p>Country: BD</p> <FaChevronDown />
					</div>
				</div>
			</div>

			<div className='max-w-screen-xl mx-auto flex items-start justify-between  mt-4'>
				<picture>
					<img
						alt='logo'
						width='418.5px'
						height='40px'
						src='https://i.ibb.co.com/8sdsLxC/logo.webp'
					/>
				</picture>
				<div className='flex gap-1 items-center'>
					{new Array(5).fill(null).map(() => {
						return <IoStar key={"ss"} />;
					})}
					<span className='font-bold'>4.84</span>
					<picture>
						<img
							alt='icon'
							src='https://integrations.etrusted.com/applications/trusted-stars-service-widget/2.13.5/8234a68abe94bd55fe5c.svg'
						/>
					</picture>
				</div>
				<div className='focus:ring-blue-500 focus:border-blue-500 w-72 h-10 rounded-md border border-gray-200 flex items-center justify-between px-2'>
					<input
						type='text'
						className='px-2 py-2 text-sm w-full placeholder-gray-400'
						placeholder='What are you looking for?'
					/>
					<button>
						<FaSearch className='text-gray-400' />
					</button>
				</div>
				<div className='flex'>
					<div className='relative'>
						<span className='absolute -right-2 -top-1  w-5 h-5 rounded-full  transform  text-xs font-bold flex items-center justify-center text-center bg-green-900 text-white'>
							5
						</span>
						<IoCartOutline size={30} />
					</div>
					<div className='pl-3 text-xs'>
						<p className='font-semibold'>Shopping cart</p>
						<p>€0.- ~ $0.-</p>
					</div>
				</div>
			</div>
			<div className='max-w-screen-xl mx-auto pt-5'>
				<div className='flex gap-5'>
					{navItems.map((item, index) => {
						return (
							<>
								<div
									className={clsx(
										styles.navItem,
										"text-lg font-medium hover:underline hover:cursor-pointer relative inline-block pb-2"
									)}
									key={index}
								>
									{item}
								</div>
								<div
									className={clsx(
										styles.menu,
										"absolute left-0 mt-2 p-10 bg-white shadow-md rounded hidden text-xs gap-10"
									)}
								>
									<ul className='grid grid-rows-5 grid-cols-5 basis-9/12'>
										{brands.map((item, index) => {
											return (
												<li
													key={index}
													className='p-1 hover:underline hover:cursor-pointer'
												>
													{item}
												</li>
											);
										})}
									</ul>
									<div className=''>
										<p className='text-lg font-semibold'>
											ALL BRANDS
										</p>
										<ul>
											{all_brands_items.map((item, index) => {
												return (
													<li className='p-1 border-b' key={index}>
														{item}
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
