import React from 'react'
import { Mail, Address, Phone, WavingHand } from '../../../Assets/Icons'

const ContactUs = () => {
	return (
		<>
			<div className="w-full h-1/3 md:h-full flex flex-col justify-center items-center">
				<span className="text-3xl flex text-green-500 font-extrabold">
					Say Hello <WavingHand />
				</span>
				<div className="w-full md:w-auto flex md:flex-col md:justify-center justify-around text-white mt-4">
					<Mail />
					<Address />
					<Phone />
				</div>
			</div>
		</>
	)
}

export default ContactUs
