import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter basename="/restaurant-strapi-postgres">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
