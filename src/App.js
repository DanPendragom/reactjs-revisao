import React ,{Component} from 'react';

class App extends Component{
  state = {
    newcontent: [
      '',
    ],
    revisao:[
      'Styled-components',
      'Statless-components',
      'States and Properties',
      'Routes'
    ]
  }

  //  Toda função escrita dentro da classe, precisa estar no formato arrow function para acessar o "This"

  handleInputChange = e => {
    this.setState({newcontent: e.target.value});
  }

  render(){
    return(
      <div>
        <h1>Contéudo para revisar</h1>
        <input
          onChange={this.handleInputChange}
          placeholder="Adicionar novo conteúdo"
          type="text"
        />
        <ul>
          {/* Percorrendo o array revisao do estado do componente */}
          {this.state.revisao.map(revisao => <li key={revisao}>{revisao}</li>)}
        <li>{this.state.newcontent}</li>
        </ul>
      </div>
    );
  }
}

export default App;
