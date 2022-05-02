import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";

export const SearchButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const SearchIcon = styled(Search)`
  width: 1.25rem;
  color: black;
`;

export const Wrapper = styled.div`
  ul {
    list-style-type: none;
  }

  li {
    padding: 0.5em;
  }
  .trains {
    min-height: 30vh;
    display: flex;
    justify-content: space-around;
  }

  li:hover {
    color: aliceblue;
  }
`;
