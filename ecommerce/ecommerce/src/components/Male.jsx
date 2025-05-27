import { useNavigate } from "react-router-dom";
import styles from "./male.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Male({ cartdata, add }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/Cart");
  }
  function addToCart(product) {
    add([...cartdata, product]);
  }
  const products = [
    {
      id: 101,
      name: "Funkzone Plain T-shirt",
      price: 264,
      discount: 12,
      priceWithoutDiscount: 299,
      delivery: "Free",
      ratings: 3.9,
      image:
        "https://th.bing.com/th?id=OIP.ISiQACec6zTI-vopJtli-QHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 102,
      name: "Regular Fit Poplin shirt",
      price: 232,
      discount: 20,
      priceWithoutDiscount: 289,
      delivery: "Free",
      ratings: 4.2,
      image:
        "https://th.bing.com/th?id=OIP.DwfH0E4iVeInCVjp3rDGmwHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 103,
      name: "Straight Regular Jeans",
      price: 225,
      discount: 10,
      priceWithoutDiscount: 249,
      delivery: "Free",
      ratings: 3.6,
      image:
        "https://th.bing.com/th?id=OIP.8NXojcjINPf6uqRRB_aB_wHaKl&w=209&h=298&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 104,
      name: "Men Colourblock Sneakers",
      price: 234,
      discount: 20,
      priceWithoutDiscount: 292,
      delivery: "Free",
      ratings: 4.5,
      image:
        "https://th.bing.com/th?id=OIP.XdCPJSZ4Vo3Wy33pr2W_CwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 105,
      name: "Titan",
      price: 285,
      discount: 5,
      priceWithoutDiscount: 299,
      delivery: "Free",
      ratings: 4.0,
      image:
        "https://www.bing.com/th?id=OIP.ss07qcC9vdOQ0tITmcH5WwHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
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
