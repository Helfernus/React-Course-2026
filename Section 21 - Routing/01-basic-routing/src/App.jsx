import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import Error from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, // When using Index it makes it Default route when parent route is active
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
