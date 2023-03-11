import { useContext, useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import "./category.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {

  //getting the value of parameter after /shop/:param
  const { category } = useParams();

  //getting and storing the data of appropriate category form CategoriesContext to categoriesMap
  const { categoriesMap } = useContext(CategoriesContext);

  //Setting the value of products to suitable category items
  const [products, setProducts] = useState(categoriesMap[category]);

  //Products will only update if either category or categoriesMap changes

  useEffect(() => {
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
