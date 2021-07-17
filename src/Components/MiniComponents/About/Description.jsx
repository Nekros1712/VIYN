import React from 'react'
import LogoSm from '../../../Assets/LogoSm'

const Description = () => {
	return (
		<>
			<div className="w-85 lg:w-2/5 h-2/5 lg:h-4/5 bg-secondary rounded-xl text-center text-white flex flex-col justify-center items-center px-1 xs:px-4 sm:px-12">
				<div>
					<LogoSm />
					<span className="italic sm:text-lg lg:text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Eu consequat phasellus in faucibus purus, eget orci.
						Amet tellus faucibus maecenas magna. Nam augue tempor
						sodales orci. Aliquet diam leo, luctus viverra laoreet
						dictumst. Justo, elementum, id cursus nunc, vitae.
						Ullamcorper molestie enim nunc, amet nisi neque leo.
					</span>
				</div>
			</div>
		</>
	)
}

export default Description
