import React from 'react';
import Timer from "./components/Timer/Timer";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="app_title"><i>Timer App by Mukarram Ali</i></h1>
      <Timer />
    </div>
  );
}
//  yarn add enzyme @types/enzyme @types/enzyme-adapter-react-16 
// enzyme-adapter-react-16 enzyme-to-json jest-fetch-mock ts-jest
export default App;
