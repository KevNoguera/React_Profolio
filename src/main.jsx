import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

import AboutPage from './components/AboutPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import PortfolioPage from './components/PortfolioPage.jsx';
import ResumePage from './components/ResumePage.jsx';
import ContactPage from './components/ContactPage.jsx';



const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    errorElement:<ErrorPage />,
    children:[
      {
        index: true,             
        element:<AboutPage />,
      },
      {
        path: 'AboutPage', 
        element: <AboutPage />,
      },
      {
        path: 'PortfolioPage',
        element: <PortfolioPage />,
      },
      {
        path: 'ContactPage',
        element: <ContactPage />,
      },
      {
        path: 'ResumePage',
        element: <ResumePage />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
<RouterProvider router={router} />
{}
</StrictMode>);

