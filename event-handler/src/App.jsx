import React from "react";

export default function App() {
  const isLoggedIn = false;

  // if (!isLoggedIn) {
  //   return <p>You need to log in first</p>;
  // } else {
  //   return <>
  //   <p>Welcome</p>;
  //   </>
  // }

  function handleClick() {
    console.log("Button clicked!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
}

// return (
//   <div>
//     <h1>React App</h1>
//     <h2>Event Handler</h2>
//     <button onClick={() => console.log("Clicked!")}>Click me!</button>
//     <h2>Conditional Rendering</h2>
//     {isLoggedIn && <p>Welcome to your dashboard.</p>}
//   </div>
// );
