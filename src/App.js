import { useRef } from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import MobileApp from './Components/MobileApp'
import { UnderMaintenance } from './Components/UnderMaintenance'

function App() {

	const navRefAbout = useRef(null)
	const navRefMobile = useRef(null)
	const navRefContact = useRef(null)

	return (
		// <div
		// 	className="h-screen overflow-y-scroll overflow-x-hidden"
		// 	style={{ scrollSnapType: 'y mandatory' }}>
		// 		<Home aboutRef={navRefAbout} mobileRef={navRefMobile} contactRef={navRefContact} />
		// 		<About scrollHere={navRefAbout} />
		// 		<MobileApp scrollHere={navRefMobile} />
		// 		<Contact scrollHere={navRefContact} />
		// </div>
		<UnderMaintenance />
	)
}

export default App
