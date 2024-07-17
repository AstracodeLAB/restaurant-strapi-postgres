import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';


function App() {
  

  return (
    <>
     
      <BrowserRouter>
				<Routes>
					<Route path='/restaurant-strapi-postgres' element={ <Landing />} />
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
