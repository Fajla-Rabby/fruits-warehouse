import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/authentication/Login/Login';
import Register from './Components/authentication/Register/Register';
import RequireAuth from './Components/authentication/RequireAuth/RequireAuth';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import AddItems from './Components/Pages/AddItem/AddItems';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Items from './Components/Pages/Items/Items';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import MyItems from './Components/Pages/MyItems/MyItems';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
       
        <Route path="/feedback" ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/manageinventory' element={
        <RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>
        }></Route>

        <Route path='/myitems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        }></Route>
        <Route path='/additems' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
