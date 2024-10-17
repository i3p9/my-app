import { FaHome } from "react-icons/fa";
import Carousel from "./components/Carousel/Carousel";
import NoticeBanner from "./components/NoticeBanner/NoticeBanner";
import SingleItemHome from "./components/SingleItemHome/SingleItemHome";
import { watches, watchesComingSoon } from "@/data/watches";
import ImageBlock from "./components/ImageBlock/ImageBlock";
import TextSection from "./components/TextSection/TextSection";
import Footer from "./components/Footer/Footer";
export default function Home() {
	return (
		<>
			<NoticeBanner />
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
				<div className='text-gray-400 mt-1 flex gap-2 items-center'>
					<FaHome size={20} /> {"/ Home"}
				</div>
				<Carousel />
				<p className='text-2xl font-bold mt-6 mb-4'>Spotlight</p>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
					{watches.map((watch, index) => (
						<SingleItemHome key={index} data={watch} size='small' />
					))}
				</div>
				<div className='my-8'>
					<ImageBlock />
				</div>
				<p className='text-2xl font-bold mt-6 mb-4'>Coming Soon</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{watchesComingSoon.map((watch, index) => (
						<SingleItemHome key={index} data={watch} size='big' />
					))}
				</div>
				<div className='my-8'>
					<TextSection />
				</div>
			</div>
			<div className='bg-gray-100'>
				<Footer />
			</div>
		</>
	);
}
