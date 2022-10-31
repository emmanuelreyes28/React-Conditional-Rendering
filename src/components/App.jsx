import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

//Ternary operator (?) is used as an if else statement. It checks if the condition before ?
//is true. If so, it render the left hand side (expression) of the colon (:) otherwise it renders the right hand side (expression) of the colon

//And operator (&&) is used to check if the condition on the left is true. If so, it render the expression after the && operator.
//Otherwise it will do nothing if nothing is going to be rendered

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    // currentTime > 12 && <h1>Why are you still working?</h1>
  );
}

export default App;
