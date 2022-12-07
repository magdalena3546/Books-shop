import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";


const Footer = () => {
    return(
      <div className = {styles.footer}>
        <div className ={styles.icons}>
            <div className={styles.icon}><FontAwesomeIcon icon= {faFacebookF} /></div>
            <div className={styles.icon}><FontAwesomeIcon icon= {faInstagram} /></div>
            <div className={styles.icon}><FontAwesomeIcon icon= {faTwitter} /></div>
        </div>
        <p className={styles.text}>Copyright &copy; BooksShop 2022</p>
      </div>
    )
  }
  export default Footer;