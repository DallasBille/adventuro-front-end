import React from 'react'
import { connect } from 'react-redux'
import AdventureCard from '../Components/DonateComponents/AdventureCard'
import { fetchAdventures } from '../Adapters/adventureAdapters'
import AdventureShowDiv from '../Components/Divs/AdventureShowDiv'

class DonateContainer extends React.Component {


    componentDidMount(){
        this.props.fetchAdventures()
    }
     createAdventureCards = () => {
         return this.props.adventures.map(adventure => {
             return <AdventureCard adventure={adventure}/>
         })
    }

    filteredAdventures = () => {

    }

    render(){
        return(
            <div className="donate-container height">
            <AdventureShowDiv/>
            {this.createAdventureCards()}
            </div>
            )

    }
}

const mapStateToProps = ({adventures}) => {
    return adventures
}

export default connect(mapStateToProps, {fetchAdventures})(DonateContainer)
