import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 60px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 0em;      /* Stay at the top */
    background-color: #2E4158;
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 20px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Home',
                  css: 'fas fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/fb',
                  name: 'facebook',
                  css: 'fab fa-facebook-square',
                  key: 2
                },
                {
                  path: '/tw',
                  name: 'twitter',
                  css: 'fab fa-twitter-square',
                  key: 3
                },
                {
                    path: '/inst',
                    name: 'instagram',
                    css: 'fab fa-instagram',
                    key: 4
                },
                {//Todo:change url
                    path: '/pin',
                    name: 'pinterest',
                    css: 'fab fa-pinterest-square',
                    key: 5
                },
                {//Todo:change url
                    path: '/user-settings',
                    name: 'userSettings',
                    css: 'fa fa-user-cog',
                    key: 6
                }
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 50px;
    width: 50px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 15px;   /* Puts space between NavItems */
    a {
        font-size: 2em;
        color: ${(props) => props.active ? "#66DAC7" : "white"};
        text-decoration:none;
        :hover {
            opacity: 0.7;    
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}