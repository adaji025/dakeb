import styles from './Accordionmodule.css'
 export function Accordion({ faq, onToggle, idx, active }) {
  // const { question, answer, } = faq;
  
  return (
    <li className={`accordion_item ${active ? styles.active : ""}`} key={idx}>
      <button className="button" onClick={onToggle}>
        {'question'}
        <span className={styles.control}>{active ? "—" : "+"} </span>
      </button>
      <div className={`${styles.answer_wrapper} ${active ? styles.open : ""}`}>
        <div className="answer">{'answer'}</div>
      </div>
    </li>
  );
}