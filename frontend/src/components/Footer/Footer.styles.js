import styled from "styled-components";
import { Github, Linkedin } from "@styled-icons/bootstrap";

export const BlackGH = styled(Github)`
  width: 1.5rem;
  color: black;
  margin: 0.5em;
`;
export const BlackLI = styled(Linkedin)`
  width: 1.5rem;
  color: black;
  margin: 0.5em;
`;

export const Wrapper = styled.footer`
  background-color: ${(props) => (props.red ? "red" : null)};
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
  }
`;
