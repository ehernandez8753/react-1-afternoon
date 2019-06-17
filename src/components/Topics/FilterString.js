import React, {Component} from "react";

export default class FilterString extends Component{
    
    constructor(){
        super();

        this.state = {
            unfilteredArray: ["Egg", "Ham", "Bacon", "Milk", "Tacos"],
            userInput: "",
            filteredArray: []
        };
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(targetString){
        
        let origArray = this.state.unfilteredArray;
        let newArray = [];

        for(let i = 0; i < origArray.length; i++){
            if(origArray[i].includes(targetString)){
                newArray.push(origArray[i]);
            }
        }

        this.setState({
            filteredArray: newArray
        });
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Shopping Items: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Items: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}