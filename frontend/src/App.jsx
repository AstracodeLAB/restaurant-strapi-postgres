import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

const basename = process.env.NODE_ENV === 'production' ? '/restaurant-strapi-postgres/frontend' : '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
