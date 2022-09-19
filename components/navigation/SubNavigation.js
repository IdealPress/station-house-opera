import styles from "./SubNavigation.module.css";

export default function SubNavigation({ left, right }) {
  return (
    <div className={styles.base}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
