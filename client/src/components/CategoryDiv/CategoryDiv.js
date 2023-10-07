import React from "react";
import { useDispatch } from "react-redux";
import { useGetOneCategoryMutation } from "../../slicers/userApiSlice";
import { setProductsByCategory } from "../../slicers/productSlicer";
import { useNavigate } from "react-router-dom";
import "./style.css"
function CategoryDiv({ category }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [getOneCategory] = useGetOneCategoryMutation()
  const handleClickCategory = async () => {

    try {
      const res = await getOneCategory(category.id).unwrap();
      dispatch(setProductsByCategory(res.products))
      navigate("/categories")
      window.scrollTo(0,500);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      onClick={() => handleClickCategory()}
      className="category-div-sub">
      <div className="d-flex gap-3 align-items-center flex-column">
        <img src={category.image}></img>
        {category.name}
      </div>
    </div>
  );
}

export default CategoryDiv;
