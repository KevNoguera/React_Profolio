import { Link, useLocation } from 'react-router-dom';
import '../style/Navigation.css';


function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <h1>Kevin Noguera</h1>
    <nav class="navbar ">
    <ul >
      <li className="nav-item">
        <Link
          to="/AboutPage"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/PortfolioPage"
          className={currentPage === '/PortfolioPage' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/ContactPage"
          className={currentPage === '/ContactPage' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/ResumePage"
          className={currentPage === '/ResumePage' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </nav>
    </>
  );
}

export default Navigation;
