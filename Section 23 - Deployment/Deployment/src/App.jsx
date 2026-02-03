import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/Blog'; //Removing Eager Loading
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post'; //Removing Eager Loading for Posts
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('./pages/Blog'));
const PostPage = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true, element: <Suspense fallback={<p>Loading...</p>}>
              <BlogPage />
            </Suspense>,
            loader: () => import('./pages/Blog').then(module => module.loader())
          }, //Loading Blog Page Lazily
          {
            path: ':id',
            element: <Suspense fallback={<p>Loading Posts...</p>}>
              <PostPage />
            </Suspense>,
            loader: (meta) => import('./pages/Post').then(module => module.loader(meta))
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
