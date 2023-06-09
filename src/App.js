import {Route, Routes ,BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//pages and components
import Home from './pages/Home'
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
	{/* BrowserRouter used to wrap everything thats uses routes */}
      <BrowserRouter>
			<NavBar/>

	  	<div className='pages'>
			<Routes>
				<Route
				path='/'
				element={<Home/>}
				/>
			</Routes>
		</div>
	  </BrowserRouter>
    </div>
  );
}

export default App;
