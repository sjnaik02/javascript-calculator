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
    { name: 'ten', value: 0 },
    { name: 'decimal', value: '.' }
]

const operators = [
    { name: 'add', value: '+' },
    { name: 'subtract', value: '-' },
    { name: 'multiply', value: '*' },
    { name: 'divide', value: '/' }
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: '',
            activeEquation: '',
            lastEquation: '',
            lastOperator: '',
            output: '',
        }
        this.handleNumClick = this.handleNumClick.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleNumClick(num) {
        this.setState((state) => ({
            fragment: state.fragment + num,
            lastOperator: '',
            activeEquation: state.activeEquation + num,
            lastEquation: '',
            output: '',
        }));
    }

    handleOperatorClick(op) {
        this.setState((state) => ({
            fragment: '',
            lastOperator: op,
            activeEquation: state.activeEquation + op,
            lastEquation: '',
            output: '',
        }));
    }

    calculate() {
        this.setState((state) => ({
            lastOperator: '',
            fragment: '',
            activeEquation: '',
            lastEquation: state.activeEquation,
            output: eval(state.activeEquation),
        }));
    }

    clear() {
        this.setState((state) => ({
            lastOperator: '',
            fragment: '',
            activeEquation: '',
            lastEquation: '',
            output: '',
        }));
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 id='activeEquation-display'>your equation: {this.state.activeEquation ? this.state.activeEquation : this.state.lastEquation}</h2>
                <h1 id='display'>input: {this.state.fragment ? this.state.fragment : this.state.lastOperator ? this.state.lastOperator : this.state.output}</h1>
                {nums.map((item) =>
                    <button id={item.name} onClick={() => this.handleNumClick(item.value)}> {item.value} </button>)
                }

                {operators.map((item) =>
                    <button id={item.name} onClick={() => this.handleOperatorClick(item.value)}> {item.value} </button>)
                }

                <button id='equals' onClick={this.calculate}> = </button>
                <button id='clear' onClick={this.clear}> AC </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));