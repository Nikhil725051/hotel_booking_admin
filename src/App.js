import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/users';

function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
