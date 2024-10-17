import { FaCheck } from "react-icons/fa";

const NoticeBanner = () => {
	const banner_msg = [
		"Order before 23:59, delivered Monday 4 November",
		"Pay after without charge with Klarna",
		"30-day return period",
		"Free delivery Watches above € 50",
	];

	return (
		<div className='w-full bg-gray-100'>
			<div className='max-w-screen-xl mx-auto'>
				<div className='w-auto flex items-center justify-between h-10 text-gray-400'>
					{banner_msg.map((text, index) => {
						return (
							<p
								key={index}
								className='flex items-center gap-2 text-sm'
							>
								<FaCheck color='blue' /> {text}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NoticeBanner;
