import "./styles.css";
import { useState } from "react";

var foodDictionary = {
  Indian: [
    ["Pani Puri", "5/5"],
    ["Pav Bhaji", "4/5"],
    ["Dhosa", "3.5/5"]
  ],
  Chinese: [
    ["Noodles", "4.5/5"],
    ["Manchurian", "4/5"],
    ["Spring Rolls", "3/5"]
  ],
  Italian: [
    ["Pasta", "5/5"],
    ["Pizza", "4.5/5"],
    ["Lasagna", "4/5"]
  ]
};

var foodList = Object.keys(foodDictionary);

export default function App() {
  var [output, setOutput] = useState("");

  function foodClickHandler(food) {
    var subList = foodDictionary[food];
    setOutput(subList);
  }

  return (
    <div className="App">
      <main>
        <h1>
          <span role="img" aria-label="noodles">
            🍜
          </span>{" "}
          Hey Foodie!
        </h1>
        <p>
          See a list of my favourite food items. Click a cuisine to get started.
        </p>

        <div className="genreList">
          {foodList.map((food) => {
            return <span onClick={() => foodClickHandler(food)}>{food}</span>;
          })}
        </div>

        <hr />

        <div className="showFood">
          <ul>
            {Array.from(output).map((item) => {
              return (
                <li>
                  {item[0]}
                  <br />
                  <span className="rating">{item[1]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
