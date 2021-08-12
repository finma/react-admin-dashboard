import { Topbar, Sidebar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CreateProduct,
  CreateUser,
  Home,
  Product,
  ProductList,
  User,
  UserList,
} from "./pages";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 mt-2">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/create-user">
              <CreateUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/create-product">
              <CreateProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
