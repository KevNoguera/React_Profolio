import  React  from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
/*import Project from './components/project';
import Contact from './components/ContactPage';
import About from './components/AboutPage';
import Header from './components/header';
*/

function App() {
    
    return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
  
}

export default App;
