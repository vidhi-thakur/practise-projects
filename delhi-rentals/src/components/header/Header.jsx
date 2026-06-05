import styles from "./Header.module.css";
import { House, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <House size={20} />
        <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Delhi Rentals
        </span>
      </div>
      <div className={styles.box}>
        <Phone size={20} />
        <span>(555) 123-4567</span>
      </div>
      <div className={styles.box}>
        <Mail size={20} />
        <span>rentals.delhi@gmail.com</span>
      </div>
    </header>
  );
};

export default Header;
