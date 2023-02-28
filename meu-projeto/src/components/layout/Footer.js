import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <p>Nosso Rodapé</p>
    </footer>
  );
}

export default Footer;
