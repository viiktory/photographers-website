import {NavLink} from 'react-router-dom'

const navLinks = [
  {name: "Контакти", path: "/contact"},
  {name: "Проєкти", path: "/projects"},
  {name: "Галерея", path: "/gallery"},
]

const Navigation = () => {
  return (
    <ul className="navigation__list">
      {navLinks.map(link => (
        <li key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navigation