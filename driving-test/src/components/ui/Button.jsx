import styles from "./styles/Button.module.css";

function Button({ children, type, width = "fit-content", onClick }) {
  // type: outline, selected
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      style={{
        width,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
