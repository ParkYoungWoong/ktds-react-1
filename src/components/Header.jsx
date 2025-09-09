import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header>
      <nav className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </nav>
    </header>
  )
}
