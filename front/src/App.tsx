import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.sass';
import { Layout } from './layout';
import useScreenSize from './useScreenSize';

export default function App() {
  useScreenSize([600, 1080, 1920])
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    </Route>
  ))
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
