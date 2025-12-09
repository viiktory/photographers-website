import styles from "./SocialLinks.module.css"

type Props = {
  label: string;
  url: string;
}

const SocialLinks = ({label, url}: Props) => {
  return (
    <a className={styles.socialLink} href={url}
       aria-label="social links"
       target="_blank"
       rel="noopener noreferrer">
      {label}
    </a>
  )
}

export default SocialLinks