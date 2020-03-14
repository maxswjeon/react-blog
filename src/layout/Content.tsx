import React, {Component} from "react";
import styled from "styled-components";

import ContentHeader from "./ContentHeader";

interface ContentProps {

}

export default class Content extends Component<ContentProps> {
    render(): React.ReactElement {
        return (
            <Container>
                <ContentHeader>PYTHON</ContentHeader>
            </Container>
        );
    }
};

const Container = styled.div`
  margin-top: -50px;
`;
