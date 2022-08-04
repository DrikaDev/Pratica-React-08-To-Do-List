import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from './Components/Header'
import Footer from './Components/Footer'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dancing Script', cursive;
}
`
const CaixaPrincipal = styled.div`
  background: linear-gradient(to top, #40e0d0, #ff8c00, #ff0080);
  border: 10px solid black;
  border-radius: 20px;
  width: 100%;
  height: 100vh;
`

export default class App extends Component{
  render(){
    return(
      <CaixaPrincipal>
        <GlobalStyle/>
        <Header/>
        <Footer/>
      </CaixaPrincipal>
    )
  }
}
