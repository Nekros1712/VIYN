import React from 'react'
import Description from './MiniComponents/About/Description'
import Team from './MiniComponents/About/Team'

const About = () => {
	return (
		<div
			className="w-screen h-screen bg-primary flex flex-col lg:flex-row-reverse justify-evenly items-center"
			style={{
				scrollSnapAlign: 'center'
			}}>
			<Description />
			<Team />
		</div>
	)
}

export default About
