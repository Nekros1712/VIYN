import React from 'react'
import ScooterGirl from '../Assets/ScooterGirl.svg'
import ContactUs from './MiniComponents/Contact/ContactUs'
import Feedback from './MiniComponents/Contact/Feedback'
import Footer from './MiniComponents/Contact/Footer'

const Contact = () => {
	return (
		<div
			className="w-screen h-screen bg-primary"
			style={{
				scrollSnapAlign: 'center'
			}}>
			<div
				className="w-full h-3/4 md:w-full md:h-4/5 md:flex md:justify-between md:items-center bg-primary rounded-lg"
				style={{
					backgroundImage: `url(${ScooterGirl})`,
					backgroundSize: 'auto auto',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
				}}>
				<ContactUs />
				<Feedback />
			</div>
			<Footer />
		</div>
	)
}

export default Contact
