import React from 'react'

const Routes = ({aboutRef, mobileRef, contactRef}) => {

	const gotoAbout = () =>
		aboutRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	const gotoServices = () =>
		mobileRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	const gotoContact = () =>
		contactRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	return (
		<>
			<ul
				type="none"
				className="flex text-white text-lg font-normal sm:text-xl mt-2">
				<li className="px-4 font-semibold cursor-pointer">Home</li>
				<li onClick={gotoAbout} className="px-4 font-semibold cursor-pointer">
					About
				</li>
				<li onClick={gotoServices} className="px-4 font-semibold cursor-pointer">
					Services
				</li>
				<li onClick={gotoContact} className="px-4 font-semibold cursor-pointer">
					Contact
				</li>
			</ul>
		</>
	)
}

export default Routes
