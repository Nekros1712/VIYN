import React from 'react'
import LogoSm from '../Assets/LogoSm'

export const UnderMaintenance = () => {
	return (
		<div className='w-screen h-screen bg-primary flex justify-center items-center'>
			<div className='w-85 lg:w-3/5 h-2/5 lg:h-3/5 bg-secondary rounded-xl text-center text-white flex flex-col justify-center items-center px-1 xs:px-4 sm:px-12'>
				<LogoSm />
				<span className='italic sm:text-lg lg:text-2xl font-bold'>
					Site Under Maintenance!!
				</span>
			</div>
		</div>
	)
}
