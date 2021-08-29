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
							designation="business head"
							imgURL="url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1630263662/viyn/smit_rkpxhl.png)"
						/>
						<MemberCard
							name="Sarvesh Vichare"
							designation="tech head"
							imgURL="url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1630263662/viyn/sarvesh_bv2mxo.png)"
						/>
					</div>
					<div className="w-full h-32 flex justify-between">
						<MemberCard
							name="Dwij Iyer"
							designation="product designer"
							imgURL="url(https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
						/>
						<MemberCard
							name="Paras Patil"
							designation="app dev lead"
							imgURL="url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1630263662/viyn/paras_xtwn3x.jpg)"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Team
