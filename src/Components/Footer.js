import React, {Component} from "react"
import styled from "styled-components"

export const Rodape = styled.p`
  margin-top: 1rem;
  text-align: center;
`

export default class Footer extends Component{
    render(){
        return(
            <Rodape>&copy; Criado por Adriana Gutierrez - 08/2022 - Vai Na Web</Rodape>
        )
    }
}