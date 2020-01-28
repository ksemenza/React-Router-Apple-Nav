import React from 'react';
import Logo from "./img/logo.png";
import Search from "./img/search.png";
import Clipboard from "./img/clipboard.png";
//Browser Route Can replace browser router
import SubNav from "./components/SubNav"
import NavWrapper from "./components/NavWrapper"
import { BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import styled from 'styled-components';

const NavLinks = styled.div `
display:flex;
justify-content:space-between;
margin: 0 auto;
padding-right: 32px;
padding-left: 32px;
padding-top: 32px;
width: 1200px;
font-size: 16px;
background: #778899;
`
const HeaderIcons = styled.img `
height: 21px;

padding:5px;
`

const About = () => {
  return <h1>About Component</h1>;

}
const Contact = () => {
  return <h1>Contact Componets</h1>
}
function App() {
  return (

    <div className="App">

  
        <BrowserRouter>
        
      <NavLinks className="App-header">
        <Link to='/ '> <HeaderIcons src={Logo}/> </Link>
        <Link to='/ipad'> iPad </Link>
        <Link to='/iphone'> iPhone </Link>
        <Link to='/watch'> Watch </Link>
        <Link to='/tv'> TV </Link>
        <Link to='/music'> Music </Link>
        <Link to='/nav-items'> Support </Link>
        <HeaderIcons src={Search}/>
        <HeaderIcons src={Clipboard}/>
         </NavLinks>
        <Route exactpath="/"
        component={App.js}
        />
        <Route exact path="/nav-items">
          <SubNav/>
          </Route>
          <Route path="/nav-items/:itemID">
            <NavWrapper/>
          </Route>



        </BrowserRouter>
    
  
    </div>
  );
}

export default App;
