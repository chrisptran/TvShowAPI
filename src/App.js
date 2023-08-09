
import { Routes, Route } from 'react-router-dom';

import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Show from './views/Show';

const Home = () => {
  return(
    <div>Home</div>
  )
}

function App() {
  return (
    <div>
      <h1>TV Show</h1>
      <HeaderForm />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
