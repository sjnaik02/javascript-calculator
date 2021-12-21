import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttons: [
                {name: 'one', value: 1},
                {name: 'two', value: 2},
                {name: 'three', value: 3},
                {name: 'four', value: 4},
                {name: 'five', value: 5},
                {name: 'six', value: 6},
                {name: 'seven', value: 7},
                {name: 'eight', value: 8},
                {name: 'nine', value: 9},
                {name: 'ten', value: 0},
            ],
        }
    }

    render(){
        return(
            <div> Hello World </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));