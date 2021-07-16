import React from 'react'
import Logo from '../../../Assets/Logo'
import Routes from './Routes'

const Navbar = () => {
	return (
		<>
			<div className="relative w-full h-48 md:h-24 z-20 flex flex-col md:flex-row items-center pt-8">
				<Logo />
				<span className="w-full flex flex-col md:flex-row md:justify-between items-center">
					<Routes />
					<button className="shadow-lg text-green-500 text-xl font-extrabold rounded-full px-4 py-1 md:px-5 md:py-1 lg:px-6 lg:py-2 mt-4 md:mr-12 lg:mr-40 bg-white bg-opacity-75">
						Join Us
					</button>
				</span>
			</div>
		</>
	)
}

export default Navbar
