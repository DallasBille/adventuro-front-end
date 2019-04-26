import React from 'react'
import { connect } from 'react-redux'
import AdventureCard from '../Components/DonateComponents/AdventureCard'
import { loadAdventuresAction } from '../Redux/actions/adventureActions'

class DonateContainer extends React.Component {

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/adventures`)
        .then(res => res.json())
        .then(adventures => {
        this.props.setStateAdventures(adventures)
        })
    }

     createAdventureCards = () => {
         return this.props.adventures.map(adventure => {
             return <AdventureCard adventure={adventure}/>
         })
    }

    render(){
        return(
            <div>
                {this.createAdventureCards()}
            </div>
            )

    }
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
    setStateAdventures: (adventures)=>{dispatch({type: "LOAD_ADVENTURES", payload: adventures})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonateContainer)
