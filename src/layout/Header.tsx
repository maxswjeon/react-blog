import React, {Component} from 'react';
import styled from 'styled-components';

export default class Header extends Component {
    render(): React.ReactElement {
        return (
            <Background>
                <Container>
                    <Title>코딩하는 곰의 공부일지</Title>
                </Container>
            </Background>
        );
    }
}

const Background = styled.div`
  width: 100%;
  background-color: #1B1F24;
  overflow: auto;
`;

const Container = styled.div`
  width: 100%;
  max-width: 968px;
  margin: auto;
  overflow: auto;
`;

const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  float: left;
  color: white;
  margin: 75px 0 25px 0;
`;