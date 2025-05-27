import { useNavigate } from "react-router-dom";
import styles from "./male.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Electronics({ cartdata, add }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/Cart");
  }
  function addToCart(product) {
    add([...cartdata, product]);
  }
  const products = [
    {
      id: 501,
      name: "HP EliteBook 15.6 Full HD Touchscreen Laptop, AMD A-Series A12-8800B",
      price: 664,
      discount: 12,
      priceWithoutDiscount: 699,
      delivery: "Free",
      ratings: 3.9,
      image:
        "https://th.bing.com/th?id=OIP.A3BKzcvY32CLG3ruEOgj_gHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 502,
      name: "Apple ipad mini 64gb",
      price: 532,
      discount: 20,
      priceWithoutDiscount: 589,
      delivery: "Free",
      ratings: 4.7,
      image:
        "https://th.bing.com/th?id=OIP.dkIfYCk14oWYPUDO_A3g8wHaHX&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 503,
      name: "Samsang Galaxy A12",
      price: 425,
      discount: 10,
      priceWithoutDiscount: 449,
      delivery: "Free",
      ratings: 4.1,
      image:
        "https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 504,
      name: "T6 Smart Watch Bluetooth Wrist Watch with Camera For Android iPhone",
      price: 368,
      discount: 17,
      priceWithoutDiscount: 403,
      delivery: "Free",
      ratings: 4.2,
      image:
        "https://th.bing.com/th?id=OIP.6RjIleMR6JjDGl-yonyJzwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 505,
      name: "Apple Earpods Boat",
      price: 464,
      discount: 7,
      priceWithoutDiscount: 499,
      delivery: "Free",
      ratings: 4.0,
      image:
        "https://th.bing.com/th?id=OIP.jmxeJPhQP6vWelVND7SvBwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  ];
  return (
    <div>
      <div className={styles.container}>
        {products.map((product) => (
          <Paper
            variant="elevation"
            key={product.id}
            className={styles.itemContainer}
          >
            <div>
              <img
                src={product.image}
                alt="no image"
                className={styles.itemImage}
              />
            </div>
            <div>
              <p className={styles.itemName1}>{product.name}</p>
              <p>
                <span className={styles.itemName2}>₹{product.price}</span> |{" "}
                <span className={styles.itemName3}>
                  ₹{product.priceWithoutDiscount}
                </span>{" "}
                |{" "}
                <span className={styles.itemName1}>
                  {product.discount}% off
                </span>
              </p>
              <p className={styles.itemName1}>{product.delivery} delivery</p>
              <p className={styles.ratings}>Ratings: ⭐{product.ratings}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                variant="contained"
                className={styles.itemButton}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </Paper>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          className={styles.itemButton}
          onClick={goToCart}
        >
          Go to Cart
        </Button>
      </div>
    </div>
  );
}
