import React from 'react'
import { connect } from 'react-redux'
import AdventureCard from '../Components/DonateComponents/AdventureCard'
import { fetchAdventures } from "../Adapters/adventureAdapters"

class DonateContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAdventures()
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

const mapStateToProps = ({adventures}) => {
    return adventures
}

export default connect(mapStateToProps, {fetchAdventures})(DonateContainer)
