import { useNavigate } from "react-router-dom";
import styles from "./male.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Jewellery({ cartdata, add }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/Cart");
  }
  function addToCart(product) {
    add([...cartdata, product]);
  }
  const products = [
    {
      id: 401,
      name: "Gold Jewellery Earrings Jhumka - Hoop Earrings",
      price: 264,
      discount: 12,
      priceWithoutDiscount: 299,
      delivery: "Free",
      ratings: 3.8,
      image:
        "https://th.bing.com/th?id=OIP.yYcDeE_2ElRZvMYnu_L1JgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 402,
      name: "Flower Design Cz Stone Fashion Double Finger Ring",
      price: 173,
      discount: 17,
      priceWithoutDiscount: 208,
      delivery: "Free",
      ratings: 4.5,
      image:
        "https://th.bing.com/th?id=OIP.6PWT2fzX-UPA4bhtRI3VJQHaIq&w=231&h=270&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 403,
      name: "Luxury Vintage Large Jewelry Set Necklace Earrings Women Pendent",
      price: 444,
      discount: 13,
      priceWithoutDiscount: 479,
      delivery: "Free",
      ratings: 3.9,
      image:
        "https://th.bing.com/th?id=OIP.gDuVwgW3OeRWepEv6UAf1wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 404,
      name: "Women Silver Bracelets",
      price: 133,
      discount: 20,
      priceWithoutDiscount: 166,
      delivery: "Free",
      ratings: 3.5,
      image:
        "https://th.bing.com/th/id/OIP.RAK4LchDnlmOhE7XQC5UawHaGn?w=214&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 405,
      name: "18K Yellow Gold Diamond Bangle on Ruby Lane",
      price: 285,
      discount: 5,
      priceWithoutDiscount: 299,
      delivery: "Free",
      ratings: 3.7,
      image:
        "https://th.bing.com/th/id/OIP.-gHtTj-xqGCxyFKhNQguywHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
