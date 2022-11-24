import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/users';
import Single from './pages/single/single';
import New from './pages/new/new';
import { productInput, userInput } from './formSource';
function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/users/:id' element={<Single></Single>}></Route>
        <Route path='/users/new' element={<New inputs = {userInput} title='Add new user'></New>}></Route>
        <Route path='/products/new' element={<New inputs = {productInput} title='Add new product' ></New>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
