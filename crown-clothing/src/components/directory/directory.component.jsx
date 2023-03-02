import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'
 


/**
 *
 * @param {object} categories- An object containing the shop categories like hats, jackets etc
 * @returns {jsx} returns the CategoryItem component which contains the category item
 */

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => {
      return <CategoryItem key={category.id} category={category} />;
    })}
  </div>
);

export default Directory;
