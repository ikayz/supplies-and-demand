import React from "react";
import "../index.css";

const ProvisionForm = () => {
  return (
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      style={{ width: "40em", margin: "10em auto" }}
    >
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="water"
        >
          Gallons of Water You Need:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="water"
          type="text"
          placeholder="20"
        />
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="food">
          Servings of Food You Need:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="food"
          type="text"
          placeholder="20"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="Address"
        >
          Address
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="address"
          type="text"
          placeholder="12, Example Street, NY"
        />
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="City">
          City
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="city"
          type="text"
          placeholder="New York"
        />
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="City">
          Zip
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="city"
          type="text"
          placeholder="11220"
        />
      </div>
    </div>
  );
};

export default ProvisionForm;
