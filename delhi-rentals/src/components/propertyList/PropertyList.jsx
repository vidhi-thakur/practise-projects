import styles from "./PropertyList.module.css";

import { properties as list } from "../../data/properties";
import ImageSection from "./imageSection/ImageSection";
import PropertyAttribute from "./propertyAttribute/PropertyAttribute";

const PropertyList = () => {
  return (
    <div className={styles.container}>
      {list.map((l) => {
        return (
          <div className={styles.property}>
            <ImageSection img={l.image} />
            <PropertyAttribute />
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
