import styles from "./PropertyList.module.css";

import { properties as list } from "../../data/properties";
import ImageSection from "./imageSection/ImageSection";
import PropertyAttribute from "./propertyAttribute/PropertyAttribute";

const PropertyList = () => {
  return (
    <div className={styles.container}>
      {list.map((l) => {
        return (
          <div
            key={l.id}
            className={styles.property}
            style={{
              opacity: l.isAvailable ? 0.7 : 1,
            }}
          >
            <ImageSection
              img={l.image}
              tag={l.propertyType}
              isAvailable={l.isAvailable}
              bathroom={l.bathroom}
              bedrooms={l.bedrooms}
              area={l.area}
            />
            <PropertyAttribute />
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
