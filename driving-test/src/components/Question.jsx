import styles from "./styles/Question.module.css"

function Question({ question, as = "p" }) {
  const Tag = as;
  return <Tag className={styles.question}>{question}</Tag>;
}

export default Question;
