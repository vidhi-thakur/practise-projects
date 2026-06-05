import styles from './Tag.module.css';

const Tag = ({ tag: tagText }) => {
  return <p className={styles.container}>{tagText}</p>;
};

export default Tag;
