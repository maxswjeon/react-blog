import React, {Component} from "react";
import styled from "styled-components";
import 'normalize.css';

import Header from "./layout/Header";
import Navigation from './layout/Navigation';

export default class App extends Component {
    render(): React.ReactElement {
        return (
            <Layout>
                <Header/>
                <Navigation/>
            </Layout>
        );
    }
}

const Layout = styled.div`
  
`;