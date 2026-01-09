import {navLinks} from '../../../data/nav/navLinks';

type Props = {
  activeSection?: string;
}

const Navigation = ({activeSection}: Props) => {
  return (
    <ul className="navigation__list">
      {navLinks.map(link => {
        const id = link.path.replace("#", "");

        return (
          <li key={link.name}>
            <a
              href={link.path}
              className={`nav-link ${
                activeSection === id ? "nav-link--active" : ""
              }`}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export default Navigation