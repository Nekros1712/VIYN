import React from 'react'

const Routes = () => {
	return (
		<>
			<ul
				type="none"
				className="flex text-white text-lg font-normal sm:text-xl mt-2">
				<li className="px-4 font-semibold">Home</li>
				<li className="px-4 font-semibold">
					<a href="#about" className="no-underline">
						About
					</a>
				</li>
				<li className="px-4 font-semibold">
					<a href="#service" className="no-underline">
						Services
					</a>
				</li>
				<li className="px-4 font-semibold">
					<a href="#contact" className="no-underline">
						Contact
					</a>
				</li>
			</ul>
		</>
	)
}

export default Routes
