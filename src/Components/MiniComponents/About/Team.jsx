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
							imgURL="url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1633802126/viyn/smit_ifq0xg.jpg)"
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
							imgURL="url(https://res.cloudinary.com/dg7anvkkr/image/upload/v1633802127/viyn/dwij_dmnf56.jpg)"
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
