"use client";

export default function Search({ handleInputChange, handleReset }) {
  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={handleInputChange} />
      <button onClick={handleReset}>Reset Search</button>
    </div>
  );
}
