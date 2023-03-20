import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

import { fetchCategoriesStart } from "../../store/category/category.action";

import React from "react";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //following is the regular dispatch which triggers the moment Shop component mounts
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
