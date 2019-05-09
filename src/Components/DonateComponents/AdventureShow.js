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

    amountToCharity = () => {
        if(this.state.adventure.sum_amount - this.state.adventure.cost > 0){
            return <p className="charity-amount">${this.state.adventure.sum_amount - this.state.adventure.cost} Donated to Charity</p>
        } else {
            return null
        }
    }


    render(){
        console.log(this.state.adventure.sum_amount - this.state.adventure.cost );
    return (
        <div className="adventure-show">
            <AdventureDivider user={this.state.adventure.user}/>
            <img className="adventure-show-image"src={`http://localhost:3000/${this.state.adventure.imageURL}`}/>
            <h3>{this.state.adventure.title}</h3>
            <p className="adventure-show-text">{this.state.adventure.mission}</p>
            <h4>${this.state.adventure.sum_amount} Donated of  ${this.state.adventure.cost}</h4>
            {this.amountToCharity()}
            <ProgressBar percentage={(this.state.adventure.sum_amount/this.state.adventure.cost) * 100}/>
            <br/>
            <br/>
            <p>{this.state.adventure.donations_number} Donors</p>
            <DonateDialog  updateAdventureState={this.updateAdventureState} adventureId={this.state.adventure.id}/>
        </div>
     )
    }

}

const mapStateToProps = ({adventure}) => {
    return adventure
}

export default connect(mapStateToProps, null)(AdventureShow)
