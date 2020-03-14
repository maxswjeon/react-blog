import React, {Component} from 'react';
import styled from "styled-components";

interface NavEntryProps {
    Href: string;
    selected: boolean;
}

export default class NavEntry extends Component<NavEntryProps> {
    static defaultProps = {
        Href: '/',
        selected: false
    };

    render(): React.ReactElement {
        return (
            <Item>
                <Link href={this.props.Href}>{this.props.children}</Link>
            </Item>
        );
    }
}

const Item = styled.li`
  list-style-type: none;
  display: block;
  width: 100px;
  height: 50px;
  float:left;
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  line-height: 50px;
  color: white;
  text-decoration: none;
`;
