import { useNavigate } from "react-router-dom";
import styles from "./male.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Kids({ cartdata, add }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/Cart");
  }
  function addToCart(product) {
    add([...cartdata, product]);
  }
  const products = [
    {
      id: 301,
      name: "Box Pleated Skirts",
      price: 224,
      discount: 14,
      priceWithoutDiscount: 259,
      delivery: "Free",
      ratings: 3.0,
      image:
        "https://th.bing.com/th?id=OIP.tRyXg87M_e6VAgogaPfBwgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 302,
      name: "Boys Slim Fit Jeans",
      price: 349,
      discount: 9,
      priceWithoutDiscount: 384,
      delivery: "Free",
      ratings: 4.3,
      image:
        "https://th.bing.com/th?id=OIP.0BMi1wVcNUYqJ4FliVcLqQHaJM&w=224&h=278&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 303,
      name: "CRCKT 15-inch School Backpack with Plush Dangle",
      price: 225,
      discount: 10,
      priceWithoutDiscount: 249,
      delivery: "Free",
      ratings: 3.0,
      image:
        "https://th.bing.com/th?id=OIP._Rwaw2hqVepFlzNSPF7oeQHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 304,
      name: "Teddy Bear, 1.4 FT Soft Small Stuffed Animal Plush Toy",
      price: 205,
      discount: 15,
      priceWithoutDiscount: 240,
      delivery: "Free",
      ratings: 3.9,
      image:
        "https://th.bing.com/th?id=OIP.8DmN79t1Cd-QZ8NpsvVGxAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 305,
      name: "Pink cotton pyjamas",
      price: 182,
      discount: 16,
      priceWithoutDiscount: 217,
      delivery: "Free",
      ratings: 4.4,
      image:
        "https://th.bing.com/th?id=OIP.m-CZy3JPnxRC1lS7xZlWSAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
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
