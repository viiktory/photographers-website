import {navLinks} from '../../../data/nav/navLinks';

const Navigation = () => {

  return (
    <ul className="navigation__list">
      {navLinks.map(link => (
        <li key={link.name}>
          <a href={link.path} className="nav-link">{link.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default Navigation