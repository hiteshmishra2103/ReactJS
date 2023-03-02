import "./category-item.styles.scss";

/**
 *
 * @param {object} categories- An object containing the shop categories like hats, jackets etc
 * @returns {jsx} returns the jsx for category items
 */

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
