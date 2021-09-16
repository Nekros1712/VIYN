import React from 'react'
import Hero from './MiniComponents/Home/Hero'
import Navbar from './MiniComponents/Home/Navbar'

const Home = ({ aboutRef, mobileRef, contactRef }) => {
	return (
		<div
			className="relative h-screen w-screen flex flex-col justify-between"
			style={{
				backgroundImage:
					'url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1631805074/viyn/maxim-mushnikov-3zYonE2hNrA-unsplash_2_ufejk0.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				scrollSnapAlign: 'center'
			}}>
			<Navbar about={aboutRef} mobile={mobileRef} contact={contactRef} />
			<Hero scroll={contactRef} />
		</div>
	)
}

export default Home
