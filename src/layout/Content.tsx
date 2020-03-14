import React, {Component} from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";

interface ContentProps {

}

export default class Content extends Component<ContentProps> {
    render(): React.ReactElement {
        return (
            <Background>
                <Container>
                    <ContentHeader>PYTHON</ContentHeader>
                    <div/>
                </Container>
            </Background>
        );
    }
};

const Background = styled.div`
  background-color: #F9F9F9;
`;

const Container = styled.div`
  margin-top: -50px;
`;
