import CategoryItem from "../category-item/category-item.component";

/**
 *
 * @param {object} categories- An object containing the shop categories like hats, jackets etc
 * @returns {jsx} returns the jsx for categories
 */

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => {
      return <CategoryItem key={category.id} category={category} />;
    })}
  </div>
);

export default Directory;
