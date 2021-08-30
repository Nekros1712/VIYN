import React from 'react'
import Hero from './MiniComponents/Home/Hero'
import Navbar from './MiniComponents/Home/Navbar'

const Home = (props) => {
	return (
		<div
			className="relative h-screen w-screen flex flex-col justify-between"
			style={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1589308454676-06c69786e24c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				scrollSnapAlign: 'center'
			}}>
			<Navbar scroll={props.joinUsRef} />
			<Hero scroll={props.knowMoreRef} />
		</div>
	)
}

export default Home
