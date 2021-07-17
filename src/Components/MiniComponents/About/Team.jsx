import React from 'react'
import MemberCard from './MemberCard'

const Team = () => {
	return (
		<>
			<div className="w-85 lg:w-2/5 h-1/2 lg:h-4/5 flex flex-col justify-center items-center lg:mt-16">
				<span className="text-center min-h-0 text-green-500 text-2xl font-extrabold my-4 lg:my-0 lg:text-4xl">
					Our Team
				</span>
				<div className="w-full h-full flex flex-col justify-around lg:justify-evenly items-center">
					<div className="w-full h-32 flex justify-between">
						<MemberCard
							name="Smit Nalawde"
							designation="marketing mgr"
							imgURL="url(https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80)"
						/>
						<MemberCard
							name="Smit Nalawde"
							designation="product designer"
							imgURL="url(https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
						/>
					</div>
					<div className="w-full h-32 flex justify-between">
						<MemberCard
							name="Smit Nalawde"
							designation="product designer"
							imgURL="url(https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
						/>
						<MemberCard
							name="Smit Nalawde"
							designation="automobile engg"
							imgURL="url(https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Team
