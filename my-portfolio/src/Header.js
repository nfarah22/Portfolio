import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <header className="header">
      <div className="title-container">
        <h1 className="nav-title">Najah Farah</h1>
      </div>
      <div className="navigation">
        <Link smooth to="#about" className="nav-link">About</Link>
        <Link smooth to="#projects" className="nav-link">Projects</Link>
        <Link smooth to="#contact" className="nav-link">Contact</Link>
      </div>
    </header>
  );
}


export default Header;