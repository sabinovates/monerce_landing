import React from "react";

const Header = () => {
  const goToWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=231880538190&text=Tell%20me%20more%20about%20Monerce&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <header>
      <div className="header-logo">
        <img className="desktop" src="assets/images/header-logo.png" alt="monerce" />
        <img className="mobile" src="assets/images/logo.svg" alt="monerce" />
      </div>
      <div className="contact-whatsapp" onClick={goToWhatsapp}>
        <span>Can't Wait? Chat with us!</span>
        <img src="assets/images/whatsapp.png" alt="whatsapp" />
      </div>
    </header>
  );
};

export default Header;
