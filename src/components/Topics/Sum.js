import React, {Component} from "react";

export default class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }

    handleChange1(value){
        this.setState({number1: value});
    }
    handleChange2(value){
        this.setState({number2: value});
    }

    sumValues(num1, num2){
        let val1 = parseInt(num1, 10);
        let val2 = parseInt(num2, 10);
        let theSum = null;

        theSum = val1 + val2;
        this.setState({sum: theSum});
    }
    
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={(event) => this.handleChange1(event.target.value)}></input>
                <input className="inputLine" onChange={(event) => this.handleChange2(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.sumValues(this.state.number1, this.state.number2)}> Sum the Values </button>
                <span className="resultsBox"> Sum: {JSON.stringify(this.state.sum, null, 10)} </span>
            </div>
        )
    }
}