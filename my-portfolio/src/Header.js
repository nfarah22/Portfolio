import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;