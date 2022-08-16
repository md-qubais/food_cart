import React from "react";

const Header = () => {
  return (
    <nav>
      <h1 className="header">Fantastic Meals</h1>
      <div>
        <h1 className="header">
        <i class="fa fa-shopping-cart"></i> Your Cart 0
      </h1>
      </div>
    </nav>
  );
};

export default Header;
