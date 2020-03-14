import React, {Component} from "react";
import styled from "styled-components";
import 'normalize.css';

import Header from "./layout/Header";
import Content from "./layout/Content";

export default class App extends Component {
    render(): React.ReactElement {
        return (
            <Layout>
                <Header/>
                <Content/>
            </Layout>
        );
    }
}

const Layout = styled.div`
  
`;