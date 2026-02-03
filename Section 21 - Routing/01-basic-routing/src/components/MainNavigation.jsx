import { Link, NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header className='main-nav'>
      <nav>
        <ul className='main-nav__links'>
          <li className='main-nav__link'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({ isActive }) => (isActive ? 'active' : undefined)}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
