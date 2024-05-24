import React from "react";
import "./View.css";

function View({ product, seller }) {
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price}</p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{new Date(product.createdAt.toDate()).toDateString()}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          {seller ? (
            <>
              <p>{seller.name}</p>
              <p>{seller.contact}</p>
            </>
          ) : (
            <p>Loading seller details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;

// import React from "react";
// import "./View.css";
// function View() {
//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img src="../../../Images/R15V3.jpg" alt="" />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; 250000 </p>
//           <span>YAMAHA R15V3</span>
//           <p>Two Wheeler</p>
//           <span>Tue May 04 2021</span>
//         </div>
//         <div className="contactDetails">
//           <p>Seller details</p>
//           <p>No name</p>
//           <p>1234567890</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default View;
