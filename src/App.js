import { useRef } from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import MobileApp from './Components/MobileApp'

function App() {

	const ref = useRef(null)
	const contactRef = useRef(null)

	return (
		<div
			className="h-screen overflow-y-scroll overflow-x-hidden"
			style={{ scrollSnapType: 'y mandatory' }}>
				<Home knowMoreRef={ref} joinUsRef={contactRef} />
				<About scrollHere={ref} />
				<MobileApp />
				<Contact scrollHere={contactRef} />
		</div>
	)
}

export default App
