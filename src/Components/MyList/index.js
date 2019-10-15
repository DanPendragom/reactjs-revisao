import React, {Component} from 'react';
import Item from './item';
import './style.css';

class MyList extends Component {

    state = {
        food: [],
        newfood: [
            '',
        ]
    }

    componentDidMount(){
        const foods = localStorage.getItem('comida');
        this.setState({food: JSON.parse(foods)})
    }

    componentWillUnmount(){

    }

    componentDidUpdate(_, prevState){
        if(prevState !== this.state.food){
            localStorage.setItem('comida',JSON.stringify(this.state.food));
        }
    }

    handleinputchange = e =>{
        this.setState({newfood: e.target.value});
    }

    handlesubmit = e =>{
        e.preventDefault();
        if(document.getElementById('myfood').value != ''){
                this.setState({food: [...this.state.food, this.state.newfood],
                newfood: ''
            });
        }
    }

    handledelete = (food) =>{
        console.log(food);
        this.setState({food: this.state.food.filter(f => f != food)});
    }

    render(){
        return(
            <div className="container">
                <form autoComplete="off" onSubmit={this.handlesubmit} >
                    <h1>My favorites foods</h1>
                    <div className="enterValue">
                        <input 
                            id="myfood"
                            onChange={this.handleinputchange}
                            value={this.state.newfood}
                            placeholder="Digite um valor"
                        />
                        <input 
                            value=">>"
                            type="submit"
                        />
                    </div>
                    <ul>
                        {this.state.food.map(food => (
                            <Item 
                                key={food} 
                                food={food}
                                onDelete={() => this.handledelete(food)}
                            />
                        ))}
                        <Item />
                    </ul>
                </form>
            </div>
        );
    }
}

export default MyList;