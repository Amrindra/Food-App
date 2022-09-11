import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Searchbar = () => {
  return (
    <FormInput>
      <div>
        <FaSearch />
        <input type="text" />
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
  }
`;

export default Searchbar;
