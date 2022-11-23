import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/users';
import Single from './pages/single/single';
function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/users/:id' element={<Single></Single>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
