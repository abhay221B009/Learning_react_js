import React from "react";

const Header = () => {
  return (
    //The issue lies in the Header component. You're using <Header> as a custom component and also as an HTML tag, which can lead to unexpected behavior. In React, custom components should start with an uppercase letter, but it’s a good idea to avoid naming custom components after HTML tags to prevent confusion.
    <header>
      <h1>"Welcome to my website"</h1>
      <nav>
        <a href="Home" style={{ marginRight: "10px" }}>
          Home
        </a>

        <a href="About" style={{ marginRight: "10px" }}>
          About
        </a>

        <a href="Contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
