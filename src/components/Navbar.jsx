import React from "react";

const Navbar = ({ filterItem, ApiList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {ApiList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;