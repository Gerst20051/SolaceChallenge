"use client";

export default function Header({ setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="text-white bg-gray-900 border-gray-700 flex items-stretch justify-between p-5">
      <h1 className="self-center self-start text-xl">Solace Advocates</h1>
      <input type="text" onChange={handleSearchChange} placeholder="Search..." className="outline-none p-2 rounded-sm self-end text-black" />
    </header>
  );
}
