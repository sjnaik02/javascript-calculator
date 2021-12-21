import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const buttons = [
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equation: '0',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(num){
        this.setState({ equation : this.state.equation+ num });
    }

    render() {
        return (
            <div className='wrapper'>
                <h1>{this.state.equation}</h1>
                {buttons.map((item) =>
                    <button id={item.name} onClick={()=> this.handleClick(item.value)}> {item.value} </button>)
                }
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));