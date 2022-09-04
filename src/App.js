import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Alert from './components/Alert';
import AlertState from './Context/Alert/AlertState';

function App() {
	return (
		<AlertState>
			<BrowserRouter>
				<Navbar />
				<div className='container pt-4'>
					<Alert alert={{text: 'test alert'}} />
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/profile/:name' element={<Profile />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AlertState>
	);
}

export default App;
