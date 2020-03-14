import React, {Component} from 'react';
import styled from "styled-components";

import NavEntry from "./NavEntry";

export default class Navigation extends Component {
    render(): React.ReactElement {
        return (
            <Container>
                <NavEntry>홈</NavEntry>
                <NavEntry Href={"development"}>개발</NavEntry>
                <NavEntry Href={"study"}>공부</NavEntry>
                <NavEntry Href={"extra"}>기타</NavEntry>
            </Container>
        );
    }
}

const Container = styled.ul`
  background-color: #282C34;
  width: 100%;
  max-width: 968px;
  margin: auto;
  padding: 0;
  overflow: auto;
`;