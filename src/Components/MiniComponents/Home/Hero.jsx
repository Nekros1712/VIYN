import React from 'react'
import Flash from '../../../Assets/Flash'
import DownArrow from '../../../Assets/DownArrow'

const Hero = () => {
	return (
		<div className="mx-auto md:ml-28 mb-12 md:mb-28 lg:mb-32 lg:ml-40">
			<div className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">
				Taking you to the
				<br />
				new world of
				<br />
				electr
				<Flash /> c scooters
			</div>
			<button className="text-xl sm:text-2xl text-white bg-green-500 px-4 py-2 sm:px-5 sm:py-3 rounded-full mt-4 outline-none">
				Know More&nbsp;&nbsp;
				<DownArrow />
			</button>
		</div>
	)
}

export default Hero
