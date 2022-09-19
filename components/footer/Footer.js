import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.base}>
      <p className="text-sm">
        Station House Opera
        <br />
        Artsadmin, Toynbee Studios 28 <br />
        Commercial Street <br />
        London <br />
        E1 6AB <br />
        aidan@artsadmin.co.uk <br />
        +44 (0)20 7247 5102
      </p>
    </footer>
  );
}
