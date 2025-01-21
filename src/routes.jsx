import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import NewUsers from "./pages/newUsers/NewUsers";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NotFound from "./pages/notFound/NotFound";


let routes = [
    {path: "/" , element: <Home />},
    {path: "/users" , element: <UserList />},
    {path: "/newUsers" , element: <NewUsers />},
    {path: "/products" , element: <Products />},
    {path: "/product/:productId" , element: <Product />},
    { path: "*", element: <NotFound /> }
]

export default routes