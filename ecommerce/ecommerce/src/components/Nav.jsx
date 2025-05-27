import { Link, Outlet } from "react-router-dom";
import styles from "./nav.module.css";
export default function Nav(props) {
  const { cartdata } = props;
  return (
    <>
      <div className={styles.nav}>
        <div>
          <Link to="/Male" className={styles.link}>
            Male
          </Link>
        </div>
        <div>
          <Link to="/Female" className={styles.link}>
            Female
          </Link>
        </div>
        <div>
          <Link to="/Kids" className={styles.link}>
            Kids
          </Link>
        </div>
        <div>
          <Link to="/Jewellery" className={styles.link}>
            Jewellery
          </Link>
        </div>
        <div>
          <Link to="/Electronics" className={styles.link}>
            Electronics
          </Link>
        </div>
        <div className={styles.right}>
          <Link to="/Cart" className={styles.link}>
            🛒 Cart {`(${cartdata.length})`}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
