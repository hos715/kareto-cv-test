import React from "react";

const AppHeader = () => {
  return (
    <div className="c-app__header">
      <img
        className="c-app--image"
        src="assets/images/logo.png"
        width="125"
        height="125"
        alt="logo"
      />
      <h1 className="c-app__title">Hello Kareto</h1>
    </div>
  );
};

export default AppHeader;
