import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput) {
      // This navigate is used to navigate the user to the page where they search for in the search bar section
      navigate(`/searchResult/${searchInput}`);
    } else {
      alert("Please type any category in order to search!");
    }
  };

  return (
    <FormInput onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search"
        />
      </div>
      <FaSearch onClick={handleSubmit} />
    </FormInput>
  );
};

const FormInput = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
  gap: 3rem;

  input {
    border: none;
    font-size: 1.5rem;
    color: white;
    outline: none;
    background: none;
  }

  svg {
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export default Searchbar;
