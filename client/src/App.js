
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homescreen from './components/Homescreen';
import Topbar from './components/Topbar';
import Contactus from './components/Contactus';
import Register from './screens/Register';
import Login from './screens/Login';
import CartScreen from './screens/CartScreen';
import AdminScreen from './screens/admin/AdminScreen';
import AllPizzas from './components/Admin/AllPizzas';
import AllUsers from './components/Admin/AllUsers';
import AddPizza from './components/Admin/AddPizza';
import AllOrder from './components/Admin/AllOrder';
import EditPizza from './components/Admin/EditPizza';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          {/* Navbar */}
          <Topbar />
          <Routes>
            {/* admin dashboard */}
            <Route path="/admin" element={< AdminScreen />} />
            {/* index page  */}
            <Route path="/" element={< Homescreen />} />
            <Route path="/contactus" element={< Contactus />} />
            {/* register and login users */}
            <Route path="/register" element={< Register />} />
            <Route path="/login" element={< Login />} />
            {/* my cart page  */}
            <Route path="/cart" element={< CartScreen />} />
            {/* checkout page and order page  */}
            <Route path="/checkout" element={< CheckoutScreen />} />
            <Route path="/orders" element={< OrderScreen />} />
            {/*Admin panel for managing users and pizza */}
            <Route path="/admin/userlist" element={< AllUsers />} />
            <Route path="/admin/pizzalist" element={< AllPizzas />} />
            <Route path="/admin/addnewpizza" element={< AddPizza />} />
            <Route path="/admin/editpizza/:pizzaId" element={< EditPizza />} />
            <Route path="/admin/orderlist" element={< AllOrder />} />

          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
