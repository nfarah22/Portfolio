import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <h1 className="nav-title">Najah Farah</h1>
        <Link smooth to="#about" className="nav-link">About</Link>
        <Link smooth to="#projects" className="nav-link">Projects</Link>
        <Link smooth to="#contact" className="nav-link">Contact</Link>
      </div>
      <div className="title-bio">
        <p className="bio">Full-Stack Engineer Building End-to-End Solutions.</p>
      </div>
    </header>
  );
}

export default Header;