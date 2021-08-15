import "./styles.css";
import { useState } from "react";

var foodDictionary = {
  Starter: [
    ["Aloo  Chat", "North India", "3.5/5"],
    ["Bread Pakora", "South Asia", "4/5"],
    ["Spring Role", "China", "4.5/5"]
  ],
  MainCourse: [
    ["Biryani", "Persia", "4.5/5"],
    ["Chole Bhature", "North India", "4/5"],
    ["Undhiyu", "Gujarat", "5/5"]
  ],
  Dessert: [
    ["Brownie", "US", "5/5"],
    ["Pancakes", "Greece", "4.5/5"],
    ["Chocolate Cheesecake", "Greece", "4/5"]
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
      <header>
        <h1>
          <span role="img" aria-label="noodles">
            🍜
          </span>{" "}
          Hey Foodie!
        </h1>
        <p className="github">
          <a
            href="https://github.com/himadri2110/neoG-markNine"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub Repo
          </a>
        </p>
      </header>
      <main>
        <p className="about">
          See a list of various food items, their origin and rating. Choose a
          type to get started.
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
                  <span className="origin">Origin: {item[1]}</span>
                  <br />
                  <span className="rating">Rating: {item[2]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer>
        <a
          href="https://himadrishah.tech/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Himadri Shah
        </a>
      </footer>
    </div>
  );
}
