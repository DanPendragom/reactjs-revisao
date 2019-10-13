import React, { Component } from 'react';

class App extends Component {
  state = {
    newcontent: [
      '',
    ],
    revisao: [
      'Styled-components',
      'Statless-components',
      'States and Properties',
      'Routes'
    ]
  }

  //  Toda função escrita dentro da classe, precisa estar no formato arrow function para acessar o "This"

  handleInputChange = e => {
    this.setState({ newcontent: e.target.value });
  }

  handlesubmit = e => {
    // resetando função do formulario 
    e.preventDefault();
    // console.log(this.state.newcontent);

    // recriando array com o novo estado
    if(document.getElementById('input').value !== ''){
      this.setState({
        revisao: [...this.state.revisao, this.state.newcontent],
        // resetando input
        newcontent: ''
      });
    }
  }

  handledelete = (revisao) => {
    console.log(revisao)
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <h1>Contéudo para revisar</h1>
        <input
          id="input"
          onChange={this.handleInputChange}
          placeholder="Adicionar novo conteúdo"
          type="text"
          value={this.state.newcontent}
        />
        <input type="submit" value="enviar" />
        <ul>
          {/* Percorrendo o array revisao do estado do componente */}
          {this.state.revisao.map(revisao => (
            <li key={revisao}>
              {revisao}
              <button onClick={() =>this.handledelete(revisao)} type="button">Remove</button>
            </li>
          ))}

          {/* exibindo novo estado no array newcontent */}
          {/* <li>{this.state.newcontent}</li> */}
        </ul>
      </form>
    );
  }
}

export default App;
