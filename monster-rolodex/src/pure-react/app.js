const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is rendered"),
    React.createElement(Person, { name: "king", occupation: "raja" }, null),
    React.createElement(Person, { name: "queen", occupation: "rani" }, null),
    React.createElement(Person, { name: "jack", occupation: "gulam" }, null),
    React.createElement(Person, { name: "Ace", occupation: "ikka" }, null),
  ]);
};


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
