import React, { Component } from "react";

export default class EvenAndOdd extends Component{
    
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    assignEvenAndOdds(userInput){
        let inputArr = userInput.split(',');
        let evenNums = [];
        let oddNums = [];

        for(let i = 0; i < inputArr.length; i++){
            if(parseInt(inputArr[i], 10) % 2 === 0){
                evenNums.push(parseInt(inputArr[i], 10));
            } 
            else{
                oddNums.push(parseInt(inputArr[i], 10));
            } 
        }
        
        this.setState({
            evenArray: evenNums,
            oddArray: oddNums
        });
    }
    
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)} ></input>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}