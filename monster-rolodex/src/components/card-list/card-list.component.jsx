import "./card-list.styles.css";

import Card from "../card/card.component";

const CardList = ({ monsters }) => (

  //props is the first parameter passed into this functional component
  <div className="card-list">
    {monsters.map((monster) => {  
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
