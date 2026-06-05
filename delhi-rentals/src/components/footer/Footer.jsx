import styles from "./Footer.module.css";
import { Clock } from "lucide-react";

const Footer = () => {
  const today = new Date();
  const day = today.getDay();
  const time = today.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = time >= 9 && time <= 17;

  const isOpen = isWeekday && isWorkingHour;
  return (
    <footer className={styles.footer}>
      {isOpen ? (
        <div className={styles.box}>
          <p className={styles.open}>
            <Clock size={20} />
            <span>We are open now!</span>
          </p>
          <p>Call us at: (555) 123-4567</p>
        </div>
      ) : (
        <div className={styles.box}>
          <p className={styles.closed}>
            <Clock size={20} />
            <span>We are closed now!</span>
          </p>
          <p>Opening hours: Monday to Friday, 9am to 5pm.</p>
        </div>
      )}

      <p></p>
    </footer>
  );
};

export default Footer;
