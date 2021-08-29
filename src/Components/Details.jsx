import React from 'react'

const Details = () => {
	return (
		<div
			className="w-screen h-screen bg-primary"
			style={{
				scrollSnapAlign: 'center'
			}}>
			<div className="w-full h-1/2 flex items-center p-4 md:pl-20">
				<span className="w-full md:w-3/5 font-bold text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Pariatur quibusdam sed fugit explicabo quia laudantium
					asperiores provident aperiam eveniet alias reprehenderit
					eius, nihil laboriosam delectus. Pariatur vel nam dolor
					similique.
				</span>
			</div>
			<div className="w-full h-1/2 flex items-center p-4 md:pl-20">
				<span className="w-full md:w-3/5 font-bold text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Pariatur quibusdam sed fugit explicabo quia laudantium
					asperiores provident aperiam eveniet alias reprehenderit
					eius, nihil laboriosam delectus. Pariatur vel nam dolor
					similique.
				</span>
			</div>
		</div>
	)
}

export default Details
