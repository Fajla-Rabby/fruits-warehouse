import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/authentication/Login/Login';
import Register from './Components/authentication/Register/Register';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import AddItems from './Components/Pages/AddItem/AddItems';
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

        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
