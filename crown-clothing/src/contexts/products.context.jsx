import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

//supplying the default value to the createContext, It will be used when there is no matching
//'ProductsContext.provider()'

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
