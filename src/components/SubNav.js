import React from "react";
import navItems from "../data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapNav = styled.div `
display:flex;
justify-content:space-between;

margin: 0 auto;
background-color: #B0C4DE;
padding: 5px 25px;
width:1215px
`

const ImgWrap = styled.img `
padding: 15px;
height: 15px;
`
const NameWrap = styled.p `
color: white;
font-size: 14px;
padding: 0 7px;
`

const CompleteWrap = styled.div `
display:flex;
flex-direction:column;

`



const SubNav = () => {
    return (
        <WrapNav className="nav-items-wrapper">
            {navItems.map(navItem => (
                <Link to={`/nav-items/${navItem.id}`}>
                    <CompleteWrap
                    className="nav-item-slot"
                    key={navItem.id}
                    >
                    <ImgWrap
                    className="nav-item-img"
                    src={navItem.imageUrl}
                    // alt={navItem.name}
                    />
            <NameWrap>{navItem.name}</NameWrap>
                    </CompleteWrap>
                </Link>
            
            ))}
  </WrapNav>
       
    )
}

export default SubNav