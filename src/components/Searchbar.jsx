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
    // This navigate is used to navigate the user to the page where they search for in the search bar section
    navigate(`/searchResult/${searchInput}`);
  };
  return (
    <FormInput onSubmit={handleSubmit}>
      <div>
        <FaSearch onClick={handleSubmit} />
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
    </FormInput>
  );
};

const FormInput = styled.form`
  margin: 0 20rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 2rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: -1%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Searchbar;
