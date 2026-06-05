import styles from "./ImageSection.module.css";

const ImageSection = ({ img }) => {
  const imgStyles = {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={imgStyles} className={styles.container}>
      test
    </div>
  );
};

export default ImageSection;
