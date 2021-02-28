import React from "react";
import "../index.css";
import backgroundImg from "./bg.jpg";

const Home = () => {
  return (
    <div class="bg-gray-50 flex flex-row ...">
      <div
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="background-image"
      >
        <h1>Supplies and Demand</h1>
      </div>
      <div className="left">
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
