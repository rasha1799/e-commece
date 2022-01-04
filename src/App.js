import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Product from "./Pages/Home/Products/Product/Product";
import OrderReview from "./Pages/Home/OrderReview/OrderReview";
import Shipping from "./Pages/Home/Shipping/Shipping";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import AddProducts from "./Pages/Home/Products/AddProducts/AddProducts";
import DeleteProducts from "./Pages/Home/Products/DeleteProducts/DeleteProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/product/:id">
              <Product></Product>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/shipping">
              <Shipping></Shipping>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/deleteProducts">
              <DeleteProducts></DeleteProducts>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
