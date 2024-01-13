const heading = React.createElement(
  "div",
  { id: "parent" },

  [React.createElement(
    "div",
    { id: "child1" },

    [
      React.createElement("h1", {}, "i am writing h1"),
      React.createElement("h1", {}, "i am writing h2"),
    ]
  ),React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", {}, "i am writing h1"),
      React.createElement("h1", {}, "i am writing h2"),
    ]
  )]

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/**
 *
 *
 *
 *
 *
 *
 */
