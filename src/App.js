import React ,{Component} from 'react';

class App extends Component{
  state = {
    revisao:[
      'Styled-components',
      'Statless-components',
      'States and Properties',
      'Routes'
    ]
  }
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <ul>
          {this.state.revisao.map(revisao => <li key={revisao}>{revisao}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
