"use strict";

// TemplateTwo var JSX expression
// const user = {
//   name: "Suman",
//   age: 22,
//   location: "Noida"
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   } else {
//     return "UnKnown";
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Amar"}</h1>
//     {user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
var Count = 0;
var addOne = function addOne() {
  Count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  Count--;
  renderCounterApp();
};
var reset = function reset() {
  Count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Count:", Count),
    React.createElement("button", { onClick: addOne }, "+1"),
    React.createElement("button", { onClick: minusOne }, "-1"),
    React.createElement("button", { onClick: reset }, "Reset")
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
