import React, { useContext, useEffect, useState } from "react";
import "./Posts.css";
import Heart from "../../assets/Heart";
import { FirebaseContext } from "../../store/FirebaseContex";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Posts() {
  const { firestore } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = collection(firestore, "products");
        const snapshot = await getDocs(productsCollection);
        const allPost = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        console.log(allPost);
        setProducts(allPost);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [firestore]);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <Link to={`/view/${product.id}`} key={product.id}>
              <div className="card" key={product.id}>
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>
                    {new Date(product.createdAt.toDate()).toDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <Link to={`/view/${product.id}`} key={product.id}>
              <div className="card" key={product.id}>
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>
                    {new Date(product.createdAt.toDate()).toDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
