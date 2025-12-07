const navLinks = [
  {name: "Контакти", path: "#contact"},
  {name: "Проєкти", path: "#projects"},
  {name: "Галерея", path: "#gallery"},
]

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