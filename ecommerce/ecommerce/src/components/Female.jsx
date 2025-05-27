import { useNavigate } from "react-router-dom";
import styles from "./male.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function Female({ cartdata, add }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/Cart");
  }
  function addToCart(product) {
    add([...cartdata, product]);
  }
  const products = [
    {
      id: 201,
      name: "Unnati Silks",
      price: 564,
      discount: 6,
      priceWithoutDiscount: 599,
      delivery: "Free",
      ratings: 4.1,
      image:
        "https://th.bing.com/th?id=OIP.BVtjNhPPn6rspiFl3cVsdwHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 202,
      name: "Women Embroidered Yoke A-line Kurta",
      price: 259,
      discount: 12,
      priceWithoutDiscount: 294,
      delivery: "Free",
      ratings: 4.2,
      image:
        "https://th.bing.com/th?id=OIP.SX3kFxcgr5aPNm4_cTNF6gHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 203,
      name: "Evening gown",
      price: 565,
      discount: 6,
      priceWithoutDiscount: 600,
      delivery: "Free",
      ratings: 3.8,
      image:
        "https://th.bing.com/th?id=OIP.uxDjG89f_OJwOOxKZoYIAwHaKQ&w=212&h=294&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 204,
      name: "Adidas Black Leggings",
      price: 185,
      discount: 16,
      priceWithoutDiscount: 220,
      delivery: "Free",
      ratings: 4.3,
      image:
        "https://th.bing.com/th?id=OIP.V8uyDgyHnuWjUXsq90AjXQHaIi&w=232&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      id: 205,
      name: "Skinny High Jeans - Light denim blue",
      price: 285,
      discount: 5,
      priceWithoutDiscount: 299,
      delivery: "Free",
      ratings: 3.2,
      image:
        "https://th.bing.com/th?id=OIP.QUKgKWR8N8TEzXZDIHpg0QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
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
