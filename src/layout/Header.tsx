import React, {Component} from 'react';
import styled from 'styled-components';
import Navigation from "./Navigation";

export default class Header extends Component {
    render(): React.ReactElement {
        return (
            <Background>
                <Container>
                    <Title href={"/"}>코딩하는 곰의 공부일지</Title>
                </Container>
                <Navigation/>
            </Background>
        );
    }
}

const Background = styled.div`
  width: 100%;
  background-color: #1B1F24;
  overflow: auto;
  padding-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 968px;
  margin: auto;
  overflow: auto;
`;

const Title = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  float: left;
  color: white;
  padding: 75px 0 25px 0;
  display: block;
  text-decoration: none;
  font-size: 2em;
  
  @media (max-width: 968px) {
    padding-left: 25px;
  }
`;