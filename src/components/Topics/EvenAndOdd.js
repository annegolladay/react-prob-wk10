import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    
    propEvenOdds(userInput) {
        let even = []
        let odd = []
        let array = userInput.split(',')
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                even.push(parseInt(array[i], 10))
            } else {
                odd.push(parseInt(array[i], 10))
            }
        }
        this.setState({evenArray: even, oddArray: odd})
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.propEvenOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Even {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odd {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
