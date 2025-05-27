import styles from "./cart.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Cart({ cartdata, remove }) {
  function deleteItem(itemId) {
    remove(cartdata.filter((item) => item.id !== itemId));
  }
  function calculateTotal() {
    const total = cartdata.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  }
  return (
    <div>
      {cartdata.length === 0 ? (
        <h1 className={styles.empty}>Your cart is empty!!!</h1>
      ) : (
        <div>
          {cartdata.map((item) => (
            <Paper
              variant="elevation"
              key={item.id}
              className={styles.itemList}
            >
              <span>
                <img
                  src={item.image}
                  alt="no image"
                  className={styles.itemImage}
                />
              </span>
              <p className={styles.itemName1}>{item.name}</p>
              <span className={styles.itemName2}>₹{item.price}</span>
              <p className={styles.itemName3}>{item.delivery} delivery</p>
              <p className={styles.buttonContainer}>
                <Button
                  onClick={() => deleteItem(item.id)}
                  className={styles.itemButton}
                  variant="contained"
                >
                  Remove Item
                </Button>
              </p>
            </Paper>
          ))}
          <Paper variant="elevation" className={styles.itemList}>
            <span className={styles.total}>Total:</span>
            <span className={styles.itemName2}>₹{calculateTotal()}</span>
          </Paper>
          <div className={styles.buttonBuy}>
            <Button variant="contained" className={styles.itemButton}>
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
