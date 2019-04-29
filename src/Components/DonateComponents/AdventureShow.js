import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
class AdventureShow extends React.Component {

    state ={
        adventure: ''
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/adventures/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(adventure => {
            this.setState({
                adventure: adventure
            })
        })
    }
    render(){
        console.log(this.state.adventure.sum_amount)
    return (
        <div className="adventure-show">
        <h3>{this.state.adventure.title}</h3>
        <h3>{this.state.adventure.mission}</h3>
        <p>${this.state.adventure.sum_amount}/${this.state.adventure.cost} Donated</p>
        <ProgressBar percentage="50"/>
        <button>donate</button>
        </div>
     )
    }

}

const mapPropsToState = (state) => {
    return state
}

export default AdventureShow
