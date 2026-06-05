import styles from "./IconWithText.module.css";
import { Bath, Bed, Scan } from "lucide-react";

const IconWithText = ({ bedrooms, area, bathroom }) => {
  return (
    <div className={styles.container}>
      <p>
        <Bed size={14} />
        <span>{bedrooms}</span>
      </p>
      <span> | </span>
      <p>
        <Bath size={14} />
        <span>{bathroom}</span>
      </p>
      <span> | </span>
      <p>
        <Scan size={14} />
        <span>{area} m²</span>
      </p>
    </div>
  );
};

export default IconWithText;
