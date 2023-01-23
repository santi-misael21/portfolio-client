import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Health from "../compons/Health/Health";
import Login from "../compons/Log Options/01-Login";
import Logout from "../compons/Log Options/02-Logout";
import ChangeAccount from "../compons/Log Options/03-ChangeAccount";
import Blog from "../compons/Sections/04-Blog";
import Projects from "../compons/Sections/05-Projects";
import Contact from "../compons/Sections/06-Contact";
import About from "../compons/Sections/07-About";

export const router= createBrowserRouter([
  {
    path: '/health',
    element: <Health/> 
  },
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/logout',
    element: <Logout/>
  },
  {
    path: '/change-account',
    element: <ChangeAccount/>
  },
  {
    path: '/blog',
    element: <Blog/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/about',
    element: <About/>
  },
]);