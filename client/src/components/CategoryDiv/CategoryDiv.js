import React from "react";

function CategoryDiv({category}) {
    

  return (
    <div className="category-div-sub">
      <div className="d-flex gap-3 align-items-center flex-column">
        <img src={category.image}></img>
        {category.name}
      </div>
    </div>
  );
}

export default CategoryDiv;
