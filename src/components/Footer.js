import React from "react";

function Footer() {
  const today = new Date();

  return (
    <div className="footer__wrapper">
      <div className="footer">
        <p>Copyright ronnelsantos.onrender.com &copy; {today.getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
