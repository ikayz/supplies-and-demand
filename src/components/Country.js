import React from "react";
import "../index.css";

const Country = () => {
  return (
    <div
      class="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      style={{ width: "40em", margin: "10em auto" }}
    >
      <h1 style={{ color: "black", marginBottom: 20 }}>Enter Your Country</h1>
      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="country"
          type="text"
          placeholder="Ex. United States"
        />
      </div>
      <div style={{ textAlign: "center", padding: "5em" }}>
        <button class="bg-green-500 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full content-center">
          Next
        </button>
      </div>
    </div>
  );
};

export default Country;
