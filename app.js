import React from "react";
import "./styles.css";
import { useState } from "react";

var goodYT = {
  programming: [
    { name: "Code With Harry" },
    { name: " Code Help - by Love Babber" },
    { name: "Apna Collage" }
  ],
  javascript: [
    { name: "Secrets of the JavaScript Ninja", rating: "4.5/5" },
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("javascript");
  function genreClickHalder(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Good for Beginner </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout the best book and youtube channel for learning different
        technologies
      </p>

      <div>
        {Object.keys(goodYT).map((genre) => (
          <button
            onClick={() => genreClickHalder(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodYT[selectedGenre].map((good) => (
            <li
              key={good.name}
              style={{
                margin: "1rem",
                padding: "1rem",
                width: "70%",
                marginLeft: "3rem",
                border: "1px solid black",
                borderRadius: "0.5rem",
                listStyle: "none"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {good.name} </div>
              <div style={{ fontSize: "smaller" }}> {good.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
