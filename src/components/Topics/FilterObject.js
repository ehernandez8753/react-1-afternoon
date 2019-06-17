import React, {Component} from "react";

export default class FilterObject extends Component{
    constructor(){
        super();

        this.state ={
            unfilteredArray: [
                {
                    name: "Sparky",
                    age: 2,
                    color: "Brown"
                },
                {
                    name: "Doggo",
                    age: 5,
                    color: "Black"
                },
                {
                    name: "Leeroy",
                    age: 1,
                    color: "White"
                },
                {
                    name: "Doggoe",
                    age: 4,
                    color: "White",
                    behavior: "Friendly"
                }
            ],

            userInput: "",
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(property){
        let oldArray = this.state.unfilteredArray;
        let newArray = [];

        for(let i = 0; i < oldArray.length; i++){
            if(oldArray[i].hasOwnProperty(property)){
                newArray.push(oldArray[i]);
            }
        }

        this.setState({
            filteredArray: newArray
        })
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original List: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered List: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}