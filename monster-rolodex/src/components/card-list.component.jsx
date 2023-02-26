//importing class component from react
import { Component } from "react";

export default class cardList extends Component {
  render() {
    //components will also re-render when props change
    const { monsters } = this.props;

    // console.log(this.props);
    console.log("render");
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
