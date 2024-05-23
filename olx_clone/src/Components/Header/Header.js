import React, { useContext } from "react";
import "./Header.css";

import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContex";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useContext(AuthContext);
  // const { Firebase } = useContext(FirebaseContext);
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    }
  };

  const handleSellClick = () => {
    navigate("/Create");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage" onClick={handleLoginClick}>
          <span>{user ? `Welcome ${user.displayName}` : "Login"}</span>
          <hr />
        </div>
        {user && (
          <div className="logoutPage">
            <span
              onClick={() => {
                auth.signOut();
                navigate("/login");
              }}
            >
              Logout
            </span>
          </div>
        )}
        <div className="sellMenu" onClick={handleSellClick}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
