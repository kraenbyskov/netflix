import React from 'react'
import styled from "styled-components"

const Nav = styled.div`
    position: fixed;
    width:100%;
    height: 80px;
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    z-index:1000;
    background-color:rgba(20,20,20, 0.2);
    border-bottom: 2px solid rgba(100,100,100, 0.2);
    ul {
       display:inline-flex;
       justify-content:space-around;
        align-items:center;
       width:40%;
       padding-right:20px;
       li {
           list-style-type:none;
           transition: all 0.35s cubic-bezier(.35, 0, .1, 1);
           &:hover {
            color:var(--primary);
            cursor: pointer;
           }
       } 
    }
`

const Logo = styled.div`
    padding-left:20px;
    color:var(--primary);
    text-transform:uppercase;
    font-weight:600;
    font-size:35px;
    text-shadow:3px 3px 10px rgba(227,21,33,0.5), 3px 3px 30px rgba(227,21,33,0.3);
`




function Navbar() {
    return (
        <Nav>
            <Logo>Netflix</Logo>
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
                <li>My list</li>
            </ul>
        </Nav>
    )
}

export default Navbar
