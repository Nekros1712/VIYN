import React from 'react'

const MemberCard = props => {
	return (
		<>
			<div className="w-45 h-full bg-secondary rounded-lg text-center text-white p-1 pt-4 lg:pt-0 flex flex-col justify-center">
				<div
					className="w-14 h-14 lg:w-20 lg:h-20 -mt-12 mx-auto rounded-full"
					style={{
						backgroundImage: props.imgURL,
						backgroundPosition: 'center',
						backgroundSize: 'cover'
					}}></div>
				<span className="font-semibold text-md lg:text-2xl mt-4 mx-auto">
					{props.name}
				</span>
				<span className="font-thin lg:text-xl text-green-500 italic mx-auto">
					{props.designation}
				</span>
			</div>
		</>
	)
}

export default MemberCard
