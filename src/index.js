import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const nums = [
    { name: 'one', value: 1 },
    { name: 'two', value: 2 },
    { name: 'three', value: 3 },
    { name: 'four', value: 4 },
    { name: 'five', value: 5 },
    { name: 'six', value: 6 },
    { name: 'seven', value: 7 },
    { name: 'eight', value: 8 },
    { name: 'nine', value: 9 },
    { name: 'ten', value: 0 }
]

const operators =[
    {name : 'add', value: '+'},
    {name : 'subtract', value: '-'},
    {name : 'multiply', value: '*'},
    {name : 'divide', value: '/'}
]

const other = [
    {name : 'equals', value: '='},
    {name : 'clear', value: 'AC'}
]



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: '',
            equation: ''
        }
        this.handleNumClick = this.handleNumClick.bind(this);
    }

    handleNumClick(num){
        this.setState((state) => ({ 
            fragment : state.fragment+ num ,
            equation : state.equation,
        }));
    }

    handleOperatorClick(op){
        this.setState((state) => ({
            fragment : '',
            equation : state.equation + state.fragment + op 
        }));
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 id='equation-display'>{this.state.equation}</h2>
                <h1 id='display'>{this.state.fragment}</h1>
                {nums.map((item) =>
                    <button id={item.name} onClick={()=> this.handleNumClick(item.value)}> {item.value} </button>)
                }

                {operators.map((item) =>
                    <button id={item.name} onClick={()=> this.handleOperatorClick(item.value)}> {item.value} </button>)
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));