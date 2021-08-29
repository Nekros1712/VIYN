import React from 'react'
import LogoSm from '../../../Assets/LogoSm'

const Description = () => {
	return (
		<>
			<div className="w-85 lg:w-2/5 h-2/5 lg:h-4/5 bg-secondary rounded-xl text-center text-white flex flex-col justify-center items-center px-1 xs:px-4 sm:px-12">
				<div>
					<LogoSm />
					<span className="italic sm:text-lg lg:text-2xl">
						VIYN Mobility is a rideshare electric micro-mobility
						service which you can opt for first and last mile
						transit, whether to reach your office or college or
						maybe even just going a short distance, VIYN Mobility is
						making it hassle-free, Just Scan and start the ride.
					</span>
				</div>
			</div>
		</>
	)
}

export default Description
