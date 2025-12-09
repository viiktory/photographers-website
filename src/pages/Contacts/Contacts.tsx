import {socialLinks} from "../../data/socialLinks/socialLinks";
import {Form, SocialLinks} from "../../components";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section id="contact" className={`${styles.contacts} container`}>
      <ul className={styles.socialList}>
        {socialLinks.map((item) => (
          <li key={item.title} className={styles.socialItem}>
            <SocialLinks label={item.title} url={item.url}/>
          </li>
        ))}
      </ul>

      <Form/>
    </section>
  )
}

export default Contacts