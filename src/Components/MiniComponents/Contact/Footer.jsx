import React from 'react'
import {
	Instagram,
	Github,
	LinkedIn,
	Twitter,
	Facebook,
	Copyright,
	FooterLogo,
	Behance
} from '../../../Assets/Icons'

const Footer = () => {
	return (
		<>
			<div className="w-full h-1/4 md:h-1/5 bg-green-500 rounded-lg">
				<div className="w-full h-3/4 md:flex md:justify-between md:items-center">
					<div className="w-full h-1/2 flex flex-col justify-center items-center">
						<span className="text-xl font-bold">
							Our Socials: VIYN
						</span>
						<div className="w-full flex justify-center items-center">
							<a target="_new" href="https://google.com">
								<Twitter />
							</a>
							<a target="_new" href="https://google.com">
								<Facebook />
							</a>
							<a
								target="_new"
								href="https://www.linkedin.com/company/viyn-mobility/">
								<LinkedIn />
							</a>
							<a
								target="_new"
								href="https://www.instagram.com/viyn_ev/">
								<Instagram />
							</a>
						</div>
					</div>
					<div className="w-full h-1/2 flex flex-col justify-center items-center">
						<span className="text-lg font-bold">
							Developed By: Samprit JC
						</span>
						<div className="w-full flex justify-center items-center">
							<a
								target="_new"
								href="https://github.com/Nekros1712">
								<Github />
							</a>
							<a
								target="_new"
								href="https://behance.net/sampritchauras">
								<Behance />
							</a>
							<a
								target="_new"
								href="https://linkedin.com/user/sampritchaurasiya1712">
								<LinkedIn />
							</a>
							<a
								target="_new"
								href="https://instagram.com/samprit1712">
								<Instagram />
							</a>
						</div>
					</div>
				</div>
				<div className="w-full h-1/4 flex justify-center items-center pt-1 md:pt-0 md:pb-2">
					<span className="text-xl font-extrabold flex">
						<FooterLogo /> <Copyright />
						<span className="text-xl font-normal">
							Copyright 2021
						</span>
					</span>
				</div>
			</div>
		</>
	)
}

export default Footer
