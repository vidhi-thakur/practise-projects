import styles from "./PropertyAttribute.module.css";

const PropertyAttribute = ({ address, cost, availableFrom }) => {
  return (
    <div className={styles.container}>
      <p>{address}</p>
      <p style={{ fontWeight: "bold", color: "var(--theme-green)" }}>{cost}</p>
      <p>Available from: {availableFrom}</p>
    </div>
  );
};

export default PropertyAttribute;
