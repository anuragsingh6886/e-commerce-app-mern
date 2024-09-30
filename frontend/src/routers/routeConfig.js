import Home from '../components/Home';
import Product from '../components/products/Product';
import PLP from '../components/plp/ProductListing';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Categories from '../components/categories/CategoryList';
import Login from '../components/login/Login';
import Cart from '../components/basket/Cart';
import Account from '../components/account/Account';

const routes = [
    { path: '/', element: Home, exact: true },
    { path: '/product', element: Product },
    { path: '/plp', element: PLP },
    { path: '/about', element: About },
    { path: '/contact', element: Contact },
    { path: '/categories', element: Categories },
    { path: '/login', element: Login },
    { path: '/profile', element: Account },
    { path: '/cart', element: Cart },
    { path: '*', element: Home }

  ];

export default routes;