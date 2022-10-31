import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
