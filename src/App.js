import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import MobileApp from './Components/MobileApp'

function App() {

	return (
		<div
			className="h-screen overflow-y-scroll overflow-x-hidden"
			style={{ scrollSnapType: 'y mandatory' }}>
				<Home />
				<About />
				<MobileApp />
				<Contact />
		</div>
	)
}

export default App
