
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound'

import './assets/css/App.css';

function App() {
  const routes = createBrowserRouter([
    {path:'' , element : <Layout/> , children : [
      {index: true , element : <Home/>},
      {path:'/about' , element : <About/>},
      {path:'/protfolio' , element : <Portfolio/>},
      {path:'/contact' , element : <Contact/>},
      {path:'*' , element : <NotFound/>},
    ]}
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
