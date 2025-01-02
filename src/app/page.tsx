"use client";

import { useEffect, useState } from "react";
import Advocates from "./advocates";
import Header from "./header";
import Search from "./search";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience == searchTerm
      );
    });

    setSearchTerm(searchTerm);
    setFilteredAdvocates(filteredAdvocates);
  };

  const handleReset = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <>
      <Header />
      <Search handleInputChange={handleSearchInputChange} handleReset={handleReset} searchTerm={searchTerm} />
      <Advocates filteredAdvocates={filteredAdvocates} />
    </>
  );
}
