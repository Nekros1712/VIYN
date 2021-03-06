import React from 'react'

const Feedback = () => {
	return (
		<>
			<div className="w-full h-2/3 flex flex-col justify-center items-center">
				<div className="w-full text-center">
					<span className="text-3xl text-green-500 font-extrabold">
						Feedback
						<br />
					</span>
					<span className="text-white">
						Your feedbacks are valuable to us
					</span>
				</div>
				<form
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSefAm66ZqY8IOc_Jrq0uvE8Cn0fMWQLkiRyPNRBhw9vMihGYQ/formResponse"
					method="post"
					className="w-3/4 md:w-1/2 lg:max-w-md flex flex-col">
					<input
						type="email"
						name="entry.1502752561"
						className="bg-black px-2 py-2 my-4 text-white rounded-md border-green-500 border"
						placeholder="E-Mail"
					/>
					<textarea
						name="entry.1942717168"
						className="bg-black px-2 py-1 h-32 text-white rounded-md border-green-500 border"
						placeholder="Feedback"
					/>
					<input
						type="submit"
						value="Submit"
						className="bg-green-500 text-white font-semibold rounded-md py-2 mt-4"
					/>
				</form>
			</div>
		</>
	)
}

export default Feedback
