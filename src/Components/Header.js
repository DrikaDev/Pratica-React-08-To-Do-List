import React, {Component} from "react"
import styled from "styled-components"


export const Cabecalho = styled.div`
  width: 100%;

  h1{
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size: 2.5rem;
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  } 

  input{
    width: 15rem;
    border: none;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 5px white;
    outline: 0;
    margin-right: 2rem;
  }

  button{
    background-color: white;
    border: none;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    width: 4.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 3px 3px 3px 5px white;
  }
`
export const CaixaDoMeio = styled.div`
  background-color: white;
  box-shadow: 10px 10px 10px 0px black;
  border-radius: 10px;
  margin: 25px auto;
  width: 20rem;
  height: 70vh;

  section{
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px dashed black;
    width: 19rem;
    height: 2rem;
  }

  section:hover{
    background-color: beige;
  }

  p{
    font-size: 1.5rem;
    justify-content: center;
    list-style: none;
    width: 18rem;
    height: 2rem;
  }

  span{
    opacity: 0;
    cursor: pointer;
    font-size: 1.5rem;
    color: green;
  }

  span:hover{
    opacity: 1;
  }
`

export default class Header extends Component{

  state = {
    tarefa: "",
    listaTarefas: []
}

// handleChange
buscarValorDoInput = (event) => {
    this.setState({
        tarefa: event.target.value
    })
}

addTarefas = () => {
    if(this.state.tarefa.length > 0){
        this.setState(
        {
            listaTarefas: this.state.listaTarefas.concat({
                tarefa: this.state.tarefa,
                id: Date.now()
            }),
            tarefa: ""
        })
    }
}

removerTarefa = (id) => {
  this.setState({
    listaTarefas: this.state.listaTarefas.filter((item)=>{
      console.log("Aqui é do filter:", item);
      return item.id !== id
    })
  })
}

  render(){
    return( 
      <>
      <Cabecalho>
        <h1>My to do list:</h1>
        <section>
          <input onChange={this.buscarValorDoInput} 
                 value={this.state.tarefa}
                 placeholder="O que tenho que fazer hoje?"
                 type="text"/>
          <button onClick={this.addTarefas}>Adicionar</button>
        </section>
      </Cabecalho>
      
      <CaixaDoMeio>
        {this.state.listaTarefas.map((item)=>(
          <section key={item.id}>
            <p>{item.tarefa}</p>
            <span onClick={()=> this.removerTarefa(item.id)}>Done!</span>
          </section>
        ))}
      </CaixaDoMeio>
      </>
    )
  }
}
