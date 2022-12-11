import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";
const Success = () => {
  const { setTotalPrice, setCartItems, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for reciept</p>
        <p className="description">
          If you have any questions please email on
          <a className="email" href="mailto:order@gmail.com">
            order.example.com
          </a>
        </p>
        <Link href={"/"}>
          <button type="button" width={"300px"} className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
