import React, {Component} from "react";

export default class Palindrome extends Component{
    
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        };
    }

    handleChange(value){
        this.setState({userInput: value});
    }

    checkForPalindrome(targetString){
        let origString = targetString;
        let revString = origString.split('').reverse().join('');
        let isPalindrome = false;

        if(revString === origString){
            isPalindrome = true;
        }

        this.setState({
            palindrome: isPalindrome
        });
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.checkForPalindrome(this.state.userInput)}> Check for Palindrome</button>
                <span className="resultsBox"> Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}