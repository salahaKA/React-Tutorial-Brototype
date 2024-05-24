import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import View from "../Components/View/View";
import { FirebaseContext } from "../store/FirebaseContex";
import { doc, getDoc } from "firebase/firestore";

function ViewPost() {
  const { id } = useParams();
  const { firestore } = useContext(FirebaseContext);
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, "products", id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          const productData = { id: productSnap.id, ...productSnap.data() };
          setProduct(productData);

          // Fetch seller details
          const sellerRef = doc(firestore, "sellers", productData.sellerId);
          const sellerSnap = await getDoc(sellerRef);
          if (sellerSnap.exists()) {
            setSeller({ id: sellerSnap.id, ...sellerSnap.data() });
          } else {
            console.log("No such seller!");
          }
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [firestore, id]);

  return (
    <div>
      <Header />
      {product ? <View product={product} seller={seller} /> : <p>Loading...</p>}
    </div>
  );
}

export default ViewPost;

// import React from "react";

// import Header from "../Components/Header/Header";
// import View from "../Components/View/View";

// function ViewPost(props) {
//   return (
//     <div>
//       <Header />
//       <View />
//     </div>
//   );
// }

// export default ViewPost;
