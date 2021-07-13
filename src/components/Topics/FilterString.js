import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['apple', 'peach', 'banana', 'grapes', 'watermelon'],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }

    filterArray(userInput) {
        let newArray = []
        let fruit = this.state.unFilteredArray
        for(let i = 0; i < fruit.length; i++) {
            if(fruit[i].includes(userInput)) {
                newArray.push(fruit[i])
            }
        }
        this.setState({filteredArray: newArray})
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original { JSON.stringify(this.state.fruit) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}