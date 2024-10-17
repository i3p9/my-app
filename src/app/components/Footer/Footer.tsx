import { FaPhone } from "react-icons/fa6";
import paymentLogos from "@/data/paymentLogos";

const Footer = () => {
	return (
		<footer>
			<div className='mx-auto max-w-screen-xl flex gap-10 p-2 justify-between pt-8'>
				<div>
					<div className='flex items-center gap-2'>
						<FaPhone />{" "}
						<span className='font-bold text-xl'>
							+44 12 968 400 15
						</span>
					</div>
					<p className='text-gray-400'>
						Available every working day from 10:00 am to 2:00 pm and
						3:00 pm to 6:00 pm CEST
					</p>
				</div>
				<div className='flex flex-col gap-2'>
					<p className='font-bold text-lg'>
						Sign up and receive a 5% discount on your new watch!
					</p>
					<p>To spend from $75,-</p>
					<div className='flex gap-2 h-12'>
						<input
							type='text'
							className='px-2 py-2 text-sm w-full placeholder-gray-400 rounded-md basis-8/12'
							placeholder='Vul hier je e-mailadres in'
						/>
						<button className='bg-green-700 text-white font-bold rounded-md basis-4/12'>
							Signup
						</button>
					</div>
				</div>
				<div className='pt-10 border-b-2 border-gray-400'></div>
			</div>
			<div className='pt-16 border-b-2 border-white'></div>
			<div className='mx-auto max-w-screen-xl flex justify-around mt-6'>
				<div className='grid grid-cols-12 grid-rows-2 gap-2'>
					{Object.entries(paymentLogos).map(([name, url]) => (
						<img
							key={name}
							src={url}
							alt={`${name} logo`}
							className='h-5 w-auto rounded-sm'
						/>
					))}
				</div>
				<div className='flex gap-2'>
					<p>Terms and Conditions</p>
					<p>Cookie Policy</p>
					<p>Privacy Statement</p>
				</div>
			</div>
			<div className='mx-auto max-w-screen-xl flex items-center justify-center text-sm text-gray-500 pt-8 pb-6'>
				All prices are including VAT and excluding shipping costs. A
				Holland Watchgroup B.V. webshop
			</div>
		</footer>
	);
};

export default Footer;
