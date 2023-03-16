import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import "./category.styles.scss";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
  //getting the value of parameter after /shop/:param
  const { category } = useParams(); 

  console.log("rendering/re-rendering category component");
  //getting and storing the data of appropriate category form CategoriesReducer to categoriesMap
  const categoriesMap = useSelector(selectCategoriesMap);
 
   //Setting the value of products to suitable category items
  const [products, setProducts] = useState(categoriesMap[category]);


  //Products will only update if either category or categoriesMap changes

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //returning the items matching to the suitable category
  return (
    <Fragment>
      {" "}
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
