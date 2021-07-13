import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{dog:'goldendoodle', age: 2, name: 'Daisy'}, {dog:'lab', age: 10, name: 'Pepper'}, {dog:'goldendoodle', age: 1, name: 'Rosie'}],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }

    filterDogs(prop) {
        let newArray = []
        let dogs = this.state.unFilteredArray
        for(let i = 0; i < dogs.length; i++) {
            if (dogs[i].hasOwnProperty(prop) ) {
                newArray.push(dogs[i]);
            }
        }
        this.setState({filteredArray: newArray})
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original { JSON.stringify(this.state.unFilteredArray) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterDogs(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}