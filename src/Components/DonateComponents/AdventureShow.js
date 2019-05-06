import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import DonateDialog from './DonateDialog'
import AdventureDivider from './AdventureDivider'




class AdventureShow extends React.Component {

    state ={
        adventure: {},
        percentage: 0
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

    updateAdventureState = (donation) => {
        const updatedAdventure = {...this.state.adventure, ...donation.adventure}
        this.setState({ adventure: updatedAdventure})
    }


    render(){
    return (
        <div className="adventure-show">
            <AdventureDivider/>
            <img className="adventure-show-image"src={`http://localhost:3000/${this.state.adventure.imageURL}`}/>
            <h3>{this.state.adventure.title}</h3>
            <p>{this.state.adventure.mission}</p>
            <h4>${this.state.adventure.sum_amount} Donated of</h4><p>${this.state.adventure.cost}</p>
            <ProgressBar percentage={(this.state.adventure.sum_amount/this.state.adventure.cost) * 100}/>
            <br/>
            <br/>
            <p>{this.state.adventure.donations_number} donated</p>
            <DonateDialog  updateAdventureState={this.updateAdventureState} adventureId={this.state.adventure.id}/>
        </div>
     )
    }

}

const mapStateToProps = ({adventure}) => {
    return adventure
}

export default connect(mapStateToProps, null)(AdventureShow)
