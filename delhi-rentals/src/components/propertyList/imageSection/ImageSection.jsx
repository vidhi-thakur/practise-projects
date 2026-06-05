import Banner from "./banner/Banner";
import IconWithText from "./iconWithText/IconWithText";
import styles from "./ImageSection.module.css";
import Tag from "./tag/Tag";

const ImageSection = ({ img, tag, isAvailable, bedrooms, area, bathroom }) => {
  const imgStyles = {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={imgStyles} className={styles.container}>
      <Tag tag={tag} />
      {isAvailable && <Banner />}
      <IconWithText bedrooms={bedrooms} area={area} bathroom={bathroom} />
    </div>
  );
};

export default ImageSection;
