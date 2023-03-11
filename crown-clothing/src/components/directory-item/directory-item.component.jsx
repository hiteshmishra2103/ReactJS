import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

/**
 *
 * @param {object} categories- An object containing the shop categories like hats, jackets etc
 * @returns {jsx} returns the jsx for category items
 */

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
