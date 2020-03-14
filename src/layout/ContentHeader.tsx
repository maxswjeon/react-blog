import React, {Component} from "react";
import styled from "styled-components";

export default class ContentHeader extends Component {
    render(): React.ReactElement {
        return (
            <Background>
                <Header>{this.props.children}</Header>
            </Background>
        );
    }
}

const Background = styled.div`
  width: 100%;
  background-color: #1B1F24;
  overflow: auto;
`;

const Header = styled.h3`
  width: 100%;
  max-width: 968px;
  height: 50px;
  margin: auto;
  padding: 0 25px;
  line-height: 50px;
  overflow: auto;
  color: lightgray;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #EEE;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 1em;
`;
