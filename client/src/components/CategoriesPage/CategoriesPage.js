import React from 'react'
import { useSelector } from 'react-redux'
import CardContainer from "../CardConatiner/CardContainer";
import "./style.css"
import CategoryDiv from '../CategoryDiv/CategoryDiv';

function CategoriesPage() {
    const { productsByCategory, categories } = useSelector((state) => state.prod)
    return (
        <div className='categoriesByProd'>
            <div className="flash-sales">
                <div className="d-flex gap-3 align-items-center colors-red">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="40"
                        viewBox="0 0 20 40"
                        fill="none"
                    >
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <span>Categories</span>
                </div>
                <span className="flash-text">Browse By cateogry</span>
            </div>
            <div
                className="d-flex gap-5 align-items-center mb-5"
                style={{ overflowY: "hidden", height: "17rem" }}
            >
                {categories.map((category) => (
                    <CategoryDiv key={category.id} category={category} />
                ))}
            </div>
            {
                !productsByCategory.length ?
                    <div className='d-flex justify-content-center w-100'>
                        <h1 className='flash-text'>No Products Now For This category</h1>
                    </div>
                    : productsByCategory.map((category) => <CardContainer key={category.id} prod={category} />)
            }
        </div>
    )
}

export default CategoriesPage